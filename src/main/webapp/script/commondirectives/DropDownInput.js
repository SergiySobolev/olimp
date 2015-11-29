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
            var selectInput = angular.element(elem[0].querySelector('#inputElement'));
            scope.$on('dd:activate', function () {
                $dropdown.open = !$dropdown.open;
            });
            scope.$on('dd:selectItem', function () {
                $dropdown.close();
                selectInput.val($dropdown.selectedItem);
            });
        }
    };
}

function DropDownInputCtrl($scope, FuzzyStringSearchFactory) {
    var ctrl = this;
    ctrl.selectedItem = null;
    ctrl.open = false;
    ctrl.dataForDD = [];
    ctrl.activate = function(){
        $scope.$broadcast("dd:activate");
    };
    ctrl.selectItem = function(e) {
        ctrl.selectedItem = e.currentTarget.innerHTML.trim();
        $scope.$broadcast("dd:selectItem");
    };
    ctrl.updateItems = function(element){
        console.log(element);
        FuzzyStringSearchFactory.getDictionary(element, function(data){
            ctrl.updateElementsForDD(data);
            ctrl.openDD();
        });
    };
    ctrl.isOpen = function(){
        return ctrl.open;
    };
    ctrl.openDD = function(){
        ctrl.open  =  true;
    };
    ctrl.close = function(){
        ctrl.open  =  false;
    };
    ctrl.updateElementsForDD = function(data){
        console.log(data);
        ctrl.dataForDD.splice(0,ctrl.dataForDD.length);
        angular.forEach(data, function(value, key) {
            ctrl.dataForDD.push({name: value.name, code: value.code});
        });
        ctrl.dataForDD.push(data);
      //  ctrl.dataForDD.push({name: 'Russia', code: 'RU'});
    };


}