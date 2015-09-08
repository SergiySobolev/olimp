"use strict";

angular.module('httpExample', ["ngRoute"])
    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/main.jsp",
                controller: "MainCtrl",
                controllerAs: "controller",
                resolve: {
                    myData: ["httpDataLoader", function(httpDataLoader){
                        return httpDataLoader.load();
                    }]
                }
            })
    }])
    .controller("MainCtrl", ["myData", function (myData) {
        this.data = myData.data;
    }])
    .service("httpDataLoader", ["$http", function($http) {
        this.load = function() {
            return $http({url: "json/data.json"});
        }
    }]);