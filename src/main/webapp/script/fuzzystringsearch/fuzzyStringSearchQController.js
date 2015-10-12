'use strict';

    var fuzzyStringSearchModule = angular.module("fuzzyStringSearchModule");

    var fuzzyStringSearchController
        = fuzzyStringSearchModule.controller("FuzzyStringSearchController", FuzzyStringSearchController);

    function FuzzyStringSearchController($scope, FuzzyStringSearchFactory){
        $scope.s1 = "s1";
        $scope.s2 = "s2";

        $scope.findDistance = function(){
            return FuzzyStringSearchFactory.findDistance($scope.s1, $scope.s2);
        }
    }
