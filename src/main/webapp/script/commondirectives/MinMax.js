var generalModule = angular.module("generalModule");

generalModule.directive("minMax", minMax);

function minMax(){
    return {
        templateUrl: '/templates/minmax.html',
        scope:{
            min:"=",
            max:"="
        },
        link: function(scope, elem, attrs){
        }
    };
}
