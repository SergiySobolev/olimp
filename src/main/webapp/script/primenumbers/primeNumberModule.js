"use strict";
var primeNumberModule = angular.module('primeNumberModule', ["ui-rangeSlider"]);

primeNumberModule.filter("isPrimeNumber", isPrimeNumberFilter);

primeNumberModule.controller('primeNumberController', PrimeNumberController);

primeNumberModule.factory('PrimeNumberService', PrimeNumberService);

function isPrimeNumberFilter() {
    return function (input) {
        for (var divider = 2; divider <= Math.sqrt(input); divider++) {
            if (input != divider && input % divider == 0) {
                return false;
            }
        }
        return true;
    };
}

function PrimeNumberController(PrimeNumberService, $scope) {

    $scope.primeNumbersInRange = [];

    $scope.demo = {
        min: 50,
        max: 1000
    };

    $scope.$watch('[demo.min, demo.max]', function () {
        $scope.primeNumbersInRange = PrimeNumberService.findPrimeNumbersInRange($scope.demo.min, $scope.demo.max);
    });
}

function PrimeNumberService($filter){
     var findPrimeNumbersInRange = function (min, max) {
        var primeNumbersInRange = [];
        for (var i = Math.max(2, min); i <= max; i = (i % 2 == 0 ? i + 1 : i + 2)) {
            if ($filter("isPrimeNumber")(i)) {
                primeNumbersInRange.push(i);
            }
        }
        return primeNumbersInRange;
    };

    return {
        findPrimeNumbersInRange : findPrimeNumbersInRange
    }
}

