(function () {
'use strict';

  angular
    .module('app.services')
    .factory('DrinkService', DrinkService);

  function DrinkService($http, toastr) {

    var service = {
      getDrinks: getDrinks,
      updateDrink: updateDrink,
      createDrink: createDrink,
      getDrink: getDrink
    };

    return service;

    function getDrinks() {
      return $http({
        method: 'GET',
        url: '/api/v1/drinks'
      }).then(function success(res) {
        return res.data;
      }, function error(err) {
        console.error('ERR', err);
      });
    }

    function updateDrink(id, params) {
      return $http({
        method: 'PUT',
        url: '/api/v1/drinks/' + id,
        data: {
          name: params.name,
          description: params.description,
          ingredients_attributes: params.ingredients
        }
      }).then(function success(res) {
        toastr.success('Update Successfully!', 'Drink');
        return res.data;
      }, function error(err) {
        toastr.error('Ups! an error has occurred', 'Error');
        console.error('ERR', err);
      });
    }

    function createDrink(params) {
      return $http({
        method: 'POST',
        url: '/api/v1/drinks',
        data:{
          name: params.name,
          description: params.description,
          ingredients_attributes: params.ingredients
        }
      }).then(function success(res) {
        toastr.success('Create Successfully!', 'Drink');
        return res.data;
      }, function error(err) {
        toastr.error('Ups! an error has occurred', 'Error');
        console.error('ERR', err);
      });
    }

    function getDrink(id) {
      return $http({
        method: 'GET',
        url: '/api/v1/drinks/' + id
      }).then(function success(res) {
        return res.data;
      }, function error(err) {
        console.error('ERR', err);
      });
    }
  }

})();
