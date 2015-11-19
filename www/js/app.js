angular.module('pathfinder', ['ionic', 'pathfinder.controllers', 'pathfinder.services'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
      cordova.plugins.Keyboard.disableScroll(true)
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault()
    }
  })
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.attributes', {
    url: '/attributes',
    views: {
      'attributes': {
        templateUrl: 'templates/attributes.html',
        controller: 'CharacterCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/tab/attributes')
})