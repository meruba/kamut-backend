(function () {
'use strict';

  angular
    .module('app.controllers')
    .controller('FormDrinkController', FormDrinkController);

  function FormDrinkController(drinkData,
                              DrinkService,
                              $state) {

    var vmDrink = this;
    vmDrink.drink = drinkData;
    vmDrink.save = save;
    vmDrink.addIng = addIng;
    vmDrink.removeIng = removeIng;
    vmDrink.editDrink = $state.params.drinkId ? true : false;
    vmDrink.ingredient = {name:'', amount: null};

    function save(drink) {
      if (vmDrink.editDrink) {
        DrinkService.updateDrink(drink.id, drink).then(function(resp){
          $state.go('home.drinks');
          // toastr.success('Update!', 'Drink!');
        });
      }else{
        DrinkService.createDrink(drink).then(function(resp){
          $state.go('home.drinks');
          // toastr.success('Create!', 'Drink!');
        });
      }
    }

    function addIng() {
      vmDrink.drink.ingredients.push(vmDrink.ingredient);
      vmDrink.ingredient = {name:'', amount: null};
    }

    function removeIng(ingredient) {
      if (vmDrink.editDrink) {
        /*nested attributes compatibility*/
        ingredient.showField = true;
        ingredient['_destroy'] = 1; //1 = true
      }else{
        var index = vmDrink.drink.ingredients.indexOf(ingredient);
        vmDrink.drink.ingredients.splice(index, 1);
      }
    }
  }

})();
