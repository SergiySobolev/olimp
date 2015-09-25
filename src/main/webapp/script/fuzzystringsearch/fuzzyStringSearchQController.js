'use strict';

    var fuzzyStringSearchModule = angular.module("fuzzyStringSearchModule");

    var fuzzyStringSearchController
        = fuzzyStringSearchModule.controller("FuzzyStringSearchController", FuzzyStringSearchController);

    function FuzzyStringSearchController($scope){
        $scope.inputString  = "trololo";
    }
