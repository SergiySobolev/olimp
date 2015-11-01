var generalModule = angular.module("generalModule");

generalModule.directive("dropDownInput", DropDownInput);

function DropDownInput(){
    return {
        templateUrl: '/templates/dropDownInput.html',
        scope:{
            label:"=",
            element:"=",
            data:"="
        },
        link: function(scope, elem, attrs){
        }
    };
}