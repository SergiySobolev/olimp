'use strict';

    var fuzzyStringSearchModule = angular.module("fuzzyStringSearchModule");

    var fuzzyStringSearchController
        = fuzzyStringSearchModule.controller("FuzzyStringSearchController", FuzzyStringSearchController);

    function FuzzyStringSearchController($scope, FuzzyStringSearchFactory){
        $scope.s = "";
        $scope.ddLabel = "Input your string:";
        $scope.s1 = "s1";
        $scope.s2 = "s2";


        $scope.findDistance = function(){
            return FuzzyStringSearchFactory.findDistance($scope.s1, $scope.s2);
        };

        $scope.getDictionary = function(){
            return FuzzyStringSearchFactory.getDictionary($scope.state, function(data){

            });
        };
    }
