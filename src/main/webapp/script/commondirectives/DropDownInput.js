var dropDownModule = angular.module("dropDownInputModule", []);

dropDownModule.directive("dropDownInput", DropDownInput);

dropDownModule.controller("dropDownInputCtrl", DropDownInputCtrl);

function DropDownInput(){
    return {
        templateUrl: '/templates/dropDownInput.html',
        scope:{
            label:"=",
            element:"=",
            data:"="
        },
        controller:"dropDownInputCtrl",
        controllerAs:"$dropdown",
        link: function(scope, elem, attrs, $dropdown){
            var dropDownPane = angular.element(elem[0].querySelector('.drop-down-pane'));
            elem.click(function(){

            });
            scope.$on('dd:activate', function () {
                var isHidden = dropDownPane.css("display") == "none";
                $dropdown.open = isHidden;
            });
        }
    };
}

function DropDownInputCtrl($scope) {
    var ctrl = this;
    ctrl.open = false;
    ctrl.activate = function(){
        $scope.$broadcast("dd:activate");
    };
    ctrl.isOpen = function(){
        return ctrl.open;
    };
    ctrl.active = false;

    ctrl.toggle = function () {
        ctrl.active = !ctrl.active;
    };

}