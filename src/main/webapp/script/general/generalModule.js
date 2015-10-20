"use strict";
    var generalModule = angular.module('generalModule', [
                                                        "ngRoute",
                                                        "primeNumberModule",
                                                        "fuzzyStringSearchModule",
                                                        "ngAnimate",
                                                        "ui.router"
                                                        ]);

    generalModule.config(["$routeProvider", "$stateProvider", function($routeProvider, $stateProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/main.jsp"
            })
            .when("/primenumbers", {
                templateUrl: "views/primenumbers.jsp"
            })
            .when("/levenshteinDistance", {
                templateUrl: "views/levenshteinDistance.jsp"
            })
            .when("/needlemanWunsch", {
                templateUrl: "views/needlemanWunsch.jsp"
            })
            .when("/less", {
                templateUrl: "views/lessExample.jsp"
            })

    }]);

    generalModule.config( function estateConfig ( $stateProvider) {
        $stateProvider
            .state( 'login', {
                url: '/',
                views: {
                    "master": {
                        controller: 'LoginCtrl',
                        templateUrl: 'views/animExample/_login.html'
                    }
                }
            })
            .state( 'dashboard', {
                url: '/dashboard',
                views: {
                    "master": {
                        templateUrl: 'views/animExample/_dashboard.html'
                    },
                    "content@dashboard": {
                        templateUrl: 'views/animExample/_contentHome.html'
                    },
                    "navbar@dashboard": {
                        templateUrl: 'views/animExample/_navbar.html'
                    }
                }
            })
            .state( 'dashboard.frodo', {
                url: '/dashboard/frodo',
                views: {
                    "content@dashboard": {
                        templateUrl: 'views/animExample/_contentFrodo.html'
                    }
                }
            })
            .state( 'dashboard.sam', {
                url: '/dashboard/sam',
                views: {
                    "content@dashboard": {
                        templateUrl: 'views/animExample/_contentSam.html'
                    }
                }
            })
    })


