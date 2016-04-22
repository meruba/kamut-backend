(function () {
'use strict';

  angular
    .module('app.controllers')
    .controller('ShowDrinkController', ShowDrinkController);

  function ShowDrinkController($state,
                              drinkData) {

    var vmDrink = this;
    vmDrink.drink = drinkData;
  }

})();
