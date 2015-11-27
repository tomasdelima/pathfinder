angular.module('pathfinder.directives', [])
.directive('genericField', function() {
  return {
    scope: {
      colWidth: '=',
      labelColWidth: '=',
      label: '=',
      namespace: '=',
      ngChange: '&',
      save: '&',
    },
    templateUrl: 'directives/generic-field.html',
    link: function(scope, element, attr) {
      element.on('keyup', function(event) {
        console.log(scope, element, attr)
      })
    }
  }
})
