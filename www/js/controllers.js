angular.module('pathfinder.controllers', [])
.controller('CharacterCtrl', function($scope, CharacterFactory, SkillsService) {
  $scope.getAttributeTotal = function (attributeName) {
    return $scope.attributes[attributeName].reduce(function(m, v) {
      return (Number(m) || 0) + (Number(v) || 0)
    })
  }

  $scope.getAttributeModifier = function (attributeName) {
    var modifier = Math.floor(($scope.getAttributeTotal(attributeName) - 10)/2)
    return (modifier > 0 ? '+' : '') + modifier
  }

  $scope.getSkillTotal = function (skillName) {
    return Number($scope.skills[skillName].reduce(function(m, v) {
      return (Number(m) || 0) + (Number(v) || 0)
    })) + Number($scope.getSkillModifier(skillName))
  }

  $scope.getSkillModifier = function (skillName) {
    return $scope.getAttributeModifier(SkillsService.skillAbility(skillName))
  }

  $scope.saveCharacter = function () {
    localStorage.character = JSON.stringify({
      attributes: $scope.attributes,
      skills: $scope.skills,
    })
    console.log("Character saved")
  }

  $scope.loadCharacter = function () {
    var character = localStorage.character ? JSON.parse(localStorage.character) : CharacterFactory.emptyCharacter()
    $scope.attributes = character.attributes
    $scope.skills = character.skills
  }

  $scope.loadCharacter()
})
