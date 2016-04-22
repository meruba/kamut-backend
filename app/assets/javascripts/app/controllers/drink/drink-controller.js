(function () {
'use strict';

  angular
    .module('app.controllers')
    .controller('DrinkController', DrinkController);

  function DrinkController($state,
                          drinksData) {

    var vmDrinks = this;
    vmDrinks.drinks = drinksData;
    vmDrinks.noData = drinksData.length === 0 ? true:false;
  }

})();
