'use strict';

    var fuzzyStringSearchModule = angular.module("fuzzyStringSearchModule");

    var fuzzyStringSearchController
        = fuzzyStringSearchModule.controller("FuzzyStringSearchController", FuzzyStringSearchController);

    function FuzzyStringSearchController($scope, FuzzyStringSearchFactory){
        $scope.s = "";
        $scope.ddLabel = "Input your string:";
        $scope.s1 = "s1";
        $scope.s2 = "s2";
        $scope.country = {};
        $scope.countries = [ // Taken from https://gist.github.com/unceus/6501985
            {name: 'Afghanistan', code: 'AF'},
            {name: '?land Islands', code: 'AX'},
            {name: 'Albania', code: 'AL'},
            {name: 'Algeria', code: 'DZ'},
        ];

        $scope.findDistance = function(){
            return FuzzyStringSearchFactory.findDistance($scope.s1, $scope.s2);
        };

        $scope.getDictionary = function(){
            return FuzzyStringSearchFactory.getDictionary($scope.state, function(data){

            });
        };
    }
