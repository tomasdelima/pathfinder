angular.module('pathfinder.directives', [])

.directive('genericField', function() {
  return {
    restrict: 'AE',
    scope: {
      namespace: "=",
      label: "=",
      save: '&',
    },
    templateUrl: 'directives/generic-field.html',
  }
})
