(function(){
  'use strict';

  angular.module('app', [
    'app.controllers',
    'app.directives',
    'app.services',
    'ui.router',
    'templates',
    'toastr'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as vmHome'
      })
      .state('home.drinks', {
        url: 'drinks',
        templateUrl: 'drinks/drinks.html',
        controller: 'DrinkController as vmDrinks',
        resolve: {
          drinksData: function (DrinkService) {
            return DrinkService.getDrinks().then(function(data) {
              return data.drinks;
            });
          }
        }
      })
      .state('home.drink', {
        url: 'drink/{drinkId:int}',
        templateUrl: 'drinks/show.html',
        controller: 'ShowDrinkController as vmDrink',
        resolve: {
          drinkData: function (DrinkService, $stateParams) {
            var id = $stateParams.drinkId;
            return DrinkService.getDrink(id).then(function(data) {
              return data.drink;
            });
          }
        }
      })
      .state('home.new', {
        url: 'drink/new',
        templateUrl: 'drinks/form.html',
        controller: 'FormDrinkController as vmDrink',
        resolve: {
          drinkData: function () {
            return {
              name:'',
              description:'',
              ingredients: []
            };
          }
        }
      })
      .state('home.edit', {
        url: 'drink/{drinkId:int}/edit',
        templateUrl: 'drinks/form.html',
        controller: 'FormDrinkController as vmDrink',
        resolve: {
          drinkData: function (DrinkService, $stateParams) {
            var id = $stateParams.drinkId;
            return DrinkService.getDrink(id).then(function(data) {
              return data.drink;
            });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });

})();
