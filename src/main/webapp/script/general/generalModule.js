"use strict";
    var generalModule = angular.module('generalModule', [
                                                        "primeNumberModule",
                                                        "fuzzyStringSearchModule",
                                                        "ngAnimate",
                                                        "ui.router",
                                                        "mgcrea.ngStrap",
                                                        "ui.select",
                                                        "ngSanitize"
                                                        ]);


    generalModule.config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/primenumbers');

            $stateProvider

                .state('primenumbers', {
                    url: '/primenumbers',
                    templateUrl: "views/primenumbers.html"
                })

                .state('levenshteindistance', {
                    url: '/levenshteindistance',
                    templateUrl: "views/levenshteinDistance.html"
                })

                .state("needlemanWunsch", {
                    url: "/needlemanwunsch",
                    templateUrl: "views/needlemanWunsch.html"
                });

    });


