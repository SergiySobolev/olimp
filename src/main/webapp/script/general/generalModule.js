"use strict";
    var generalModule = angular.module('generalModule', [
                                                        "primeNumberModule",
                                                        "fuzzyStringSearchModule",
                                                        "dropDownInputModule",
                                                        "ngAnimate",
                                                        "ui.router",
														"anim-in-out"
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


