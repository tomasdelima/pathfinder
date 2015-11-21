angular.module('pathfinder.controllers', [])
.controller('CharacterCtrl', function ($scope, CharacterService, SkillsService, RacesService) {
  $scope.getAttributeTotal = function (attributeName) {
    return Number($scope.attributes[attributeName].reduce(function (m, v) {
      return (Number(m) || 0) + (Number(v) || 0)
    })) + Number($scope.getAttributeRacialBonus(attributeName))
  }

  $scope.getAttributeRacialBonus = function (attributeName) {
    var racialBonus = $scope.race.bonus[attributeName] || ''
    return (racialBonus > 0 ? '+' : '') + racialBonus
  }

  $scope.getAttributeModifier = function (attributeName) {
    var modifier = Math.floor(($scope.getAttributeTotal(attributeName) - 10)/2)
    return (modifier > 0 ? '+' : '') + modifier
  }

  $scope.getSkillTotal = function (skillName) {
    return Number($scope.skills[skillName].reduce(function (m, v) {
      return (Number(m) || 0) + (Number(v) || 0)
    })) + Number($scope.getSkillModifier(skillName))
  }

  $scope.getSkillAbility = function (skillName) {
    return SkillsService.skillAbility(skillName)
  }

  $scope.getSkillModifier = function (skillName) {
    return $scope.getAttributeModifier($scope.getSkillAbility(skillName))
  }

  $scope.save = CharacterService.save
  $scope.$on('$ionicView.afterEnter', function(){
    CharacterService.load($scope)
  });
})

.controller('ProfileCtrl', function ($scope, $ionicModal, CharacterService, RacesService) {
  $scope.save = CharacterService.save

  $scope.selectRace = function () {
    var race = RacesService.getRace($scope.basicInfo.Race)
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
    $scope.basicInfo.Size = race.size
    CharacterService.save($scope)
  }

  $ionicModal.fromTemplateUrl('templates/racial-attribute-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  })
  $scope.openModal = function() {
    $scope.modal.show()
  }
  $scope.closeModal = function() {
    $scope.race.bonus[$scope.basicInfo.bonusAttribute] = 2
    $scope.modal.hide()
    $scope.saveRace($scope.race)
  }

  CharacterService.load($scope)
})
