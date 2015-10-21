var generalModule = angular.module("generalModule");

generalModule.directive("navigationMenu", navigationMenu);

function navigationMenu(){
    return {
        templateUrl: '/templates/navigationmenu.html',
        scope:{
        },
        link: function(scope, elem, attrs) {
            var slideSubmenuElem = elem.find('#slide-submenu');
            var miniSubMenuElem = elem.find('.mini-submenu');
            slideSubmenuElem.click(function () {
                slideSubmenuElem.closest('.list-group').toggle('slide', function(){
                    miniSubMenuElem.fadeToggle();
                });
            });
            miniSubMenuElem.click(function () {
                miniSubMenuElem.next('.list-group').toggle('slide');
                miniSubMenuElem.hide();
            })
        }
    };
}