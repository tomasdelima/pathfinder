angular.module('pathfinder.controllers', [])
.controller('CharacterCtrl', function ($scope, CharacterService, SkillsService, RacesService) {
  $scope.getAttributeTotal = function (attributeName) {
    return Number($scope.attributes[attributeName].reduce(function (m, v) {
      return (Number(m) || 0) + (Number(v) || 0)
    })) + Number($scope.getAttributeRacialBonus(attributeName))
  }

  $scope.getSkillAbility = function (skillName) {
    return SkillsService.skillAbility(skillName)
  }

  $scope.getSkillModifier = function (skillName) {
    return $scope.getAttributeModifier($scope.getSkillAbility(skillName))
  }

  $scope.getSkillTotal = CharacterService.getSkillTotal

  $scope.getAttributeTotal = CharacterService.getAttributeTotal,
  $scope.getAttributeRacialBonus = CharacterService.getAttributeRacialBonus,
  $scope.getAttributeModifier = CharacterService.getAttributeModifier,
  $scope.save = CharacterService.save
  $scope.$on('$ionicView.afterEnter', function(){CharacterService.load($scope)})
})

.controller('ProfileCtrl', function ($scope, $ionicModal, CharacterService, RacesService) {
  $scope.save = CharacterService.saveField
  $scope.saveOld = CharacterService.save

  $scope.$on('$ionicView.afterEnter', function(){CharacterService.load($scope)})

  $scope.selectRace = function () {
    var race = RacesService.getRace($scope.profile.Race)
    if (race.bonus == "Any") {
      $scope.race = {size: race.size, bonus: {}}
      $scope.openModal()
    } else {
      $scope.saveRace(race)
    }
  }

  $scope.saveRace = function (race) {
    $scope.race = {
      bonus: race.bonus,
    }
    $scope.profile.Size = race.size
    CharacterService.save($scope)
  }

  $ionicModal.fromTemplateUrl('templates/racial-attribute-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })
  $scope.openModal = function() {
    $scope.modal.show()
  }
  $scope.closeModal = function() {
    $scope.race.bonus[$scope.profile.bonusAttribute] = 2
    $scope.modal.hide()
    $scope.saveRace($scope.race)
  }

  CharacterService.load($scope)
})

.controller('CombatCtrl', function ($scope, CharacterService) {
  $scope.save = CharacterService.saveField
  $scope.saveOld = CharacterService.save

  $scope.$on('$ionicView.afterEnter', function(){
    CharacterService.load($scope)

    $scope.speed.squares = function (mean) {
      return Math.floor($scope.speed[mean] / 1.5) || 0
    }

    $scope.combat.iniciative.total = function () {
      return $scope.combat.dexterityModifier() + Number($scope.combat.iniciative.misc || 0)
    }
    $scope.combat.dexterityModifier = function () {
      return Number(CharacterService.getAttributeModifier('Dexterity'))
    }
    $scope.combat.strengthModifier = function () {
      return Number(CharacterService.getAttributeModifier('Strength'))
    }
    $scope.combat.ac.base = function () {
      return 10 + $scope.combat.dexterityModifier()
    }
    $scope.combat.ac.total = function () {
      return $scope.combat.ac.base() + Number($scope.combat.ac.armor || 0) + Number($scope.combat.ac.shield || 0) + Number($scope.combat.ac.natural || 0) + Number($scope.combat.ac.size || 0) + Number($scope.combat.ac.deflection || 0) + Number($scope.combat.ac.misc || 0)
    }
    $scope.combat.touch.base = function () {
      return $scope.combat.ac.base() + Number($scope.combat.ac.natural || 0) + Number($scope.combat.ac.size || 0) + Number($scope.combat.ac.deflection || 0)
    }
    $scope.combat.touch.total = function () {
      return $scope.combat.touch.base() + Number($scope.combat.touch.misc || 0)
    }
    $scope.combat.flatFooted.base = function () {
      return $scope.combat.ac.base() + Number($scope.combat.ac.armor || 0) + Number($scope.combat.ac.shield || 0) + Number($scope.combat.ac.natural || 0)
    }
    $scope.combat.flatFooted.total = function () {
      return $scope.combat.flatFooted.base() + Number($scope.combat.flatFooted.misc || 0)
    }
    $scope.combat.savings.attrModifier = function (type) {
      var attr = {
        will: 'Wisdom',
        fortitude: 'Constitution',
        reflex: 'Dexterity',
      }[type]
      return Number(CharacterService.getAttributeModifier(attr))
    }
    $scope.combat.savings.total = function (type) {
      return $scope.combat.savings.base() + $scope.combat.savings.attrModifier(type) + Number($scope.combat.savings[type].magic || 0) + Number($scope.combat.savings[type].misc || 0) + Number($scope.combat.savings[type].temp || 0)
    }
    $scope.combat.savings.base = function () {
      return 0
    }
    $scope.combat.weapon.attack.total = function () {
      return $scope.combat.attack.bab + $scope.combat.strengthModifier() + Number($scope.combat.weapon.attackBonus || 0) + Number($scope.combat.weapon.attackBonusTemp || 0)
    }
    $scope.combat.weapon.damage.total = function () {
      return $scope.combat.strengthModifier() + Number($scope.combat.weapon.damageBonus || 0) + Number($scope.combat.weapon.damageBonusTemp || 0)
    }
  })
})
