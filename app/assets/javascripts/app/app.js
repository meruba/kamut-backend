(function(){
  'use strict';

  angular.module('app', [
    'app.controllers',
    'app.directives',
    'app.services',
    'ui.router',
    'templates'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as vmHome'
      });
    $urlRouterProvider.otherwise('/');
  });

})();
