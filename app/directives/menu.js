
angular.module('characterCreator')
    .directive('menu', ['coreService', menu]);

function menu() {
    return {
        restrict: 'E',
        scope: {
            menuOptions: '=',
            mode: "="
        },
        templateUrl: 'partials/menu.html',
        link: link
    };

    function link(scope, element, attrs) {
        scope.setMode = function(option) {
            scope.mode = option;
        }
    }
}
