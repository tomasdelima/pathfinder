angular.module('pathfinder.controllers', [])
.controller('CharacterCtrl', function($scope) {
  $scope.attributes = {
    Strength: [1, 0],
    Dexterity: [2, 1],
    Intelligence: [3, 2],
    Constitution: [4, 3],
    Wisdom: [5, 4],
    Charisma: [6, 5]
  }

  $scope.saveCharacter = function () {
    localStorage.character = {
      attributes: $scope.attributes
    }
  }
})
