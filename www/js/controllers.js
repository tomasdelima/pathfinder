angular.module('pathfinder.controllers', [])
.controller('CharacterCtrl', function ($scope, CharacterService, SkillsService, RacesService) {
  $scope.getAttributeTotal = function (attributeName) {
    return Number($scope.attributes[attributeName].reduce(function (m, v) {
      return (Number(m) || 0) + (Number(v) || 0)
    })) + Number($scope.getAttributeRacialBonus(attributeName))
  }

  $scope.getAttributeRacialBonus = function (attributeName) {
    var racialBonus = Number(RacesService.getRace("Half Orc").bonus[attributeName]) || ''
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
  CharacterService.load($scope)
})

.controller('ProfileCtrl', function ($scope, CharacterService) {
  $scope.save = CharacterService.save
  CharacterService.load($scope)
})
