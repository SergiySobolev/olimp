var generalModule = angular.module("generalModule");

generalModule.directive("navigationMenu", navigationMenu);

function navigationMenu(){
    return {
        templateUrl: '/templates/navigationmenu.html',
        scope:{
        },
        link: function(scope, elem, attrs) {
        }
    };
}