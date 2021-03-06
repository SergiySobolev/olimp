'use strict';

var fuzzyStringSearchModule = angular.module("fuzzyStringSearchModule");

var fuzzyStringSearchFactory
    = fuzzyStringSearchModule.factory("FuzzyStringSearchFactory", FuzzyStringSearchFactory);

function FuzzyStringSearchFactory($http){
    var findDistance = function (s1, s2) {
        return findDistanceLevenshteinRecursive(s1, s1.length, s2, s2.length);
    };

    var getDictionary = function(str, callback){
        $http({
            method: 'GET',
            url: '/rest/',
            params:{str:str}
        }).success(function(data){
            callback(data);
        }).error(function(){
            console.log("Error during getting dictionary");
        });
    };

    var findDistanceLevenshteinRecursive = function (s1,l1, s2,l2) {
        if(l1 == 0){
            return l2;
        }
        if(l2 == 0){
            return l1;
        }
        var cost = (s1[l1-1] == s2[l2-1]) ? 0 : 1;

        var d1 = findDistanceLevenshteinRecursive(s1, l1-1, s2, l2)+1;
        var d2 = findDistanceLevenshteinRecursive(s1, l1, s2, l2-1)+1;
        var d3 = findDistanceLevenshteinRecursive(s1, l1-1, s2, l2-1)+cost;

        return min3(d1, d2, d3);
    };

    var min = function(v1, v2){
        return v1 > v2 ? v2 : v1;
    };

    var min3 = function(v1, v2, v3){
        return min(min(v1, v2), v3);
    };

    return {
        findDistance : findDistance,
        getDictionary : getDictionary
    }
}


