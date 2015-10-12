"use strict";
    var generalModule = angular.module('generalModule', [
                                                        "ngRoute",
                                                        "primeNumberModule",
                                                        "fuzzyStringSearchModule"
                                                        ]);

    generalModule.config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/main.jsp",
                controller: "MainCtrl",
                controllerAs: "controller"
            })
            .when("/primenumbers", {
                templateUrl: "views/primenumbers.jsp",
                controller: "MainCtrl",
                controllerAs: "controller"
            })
            .when("/levenshteinDistance", {
                templateUrl: "views/levenshteinDistance.jsp",
                controller: "MainCtrl",
                controllerAs: "controller"
            })
            .when("/needlemanWunsch", {
                templateUrl: "views/needlemanWunsch.jsp",
                controller: "MainCtrl",
                controllerAs: "controller"
            })
    }]);

    var generalController = generalModule.controller("MainCtrl", MainController);

    function MainController(){

    }

