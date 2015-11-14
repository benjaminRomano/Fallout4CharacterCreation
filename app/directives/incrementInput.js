
angular.module('characterCreator')
    .directive('incrementInput', ['coreService', incrementInput]);

function incrementInput(coreService) {
    return {
        restrict: 'E',
        scope: {
            specialName: '=',
            name: '=',
            value: '=',
            canIncrement: '&',
            canDecrement: '&',
            increment: '&',
            decrement: '&'
        },
        templateUrl: 'partials/incrementInput.html',
        link: link
    };

    function link(scope, element, attrs) {
    }
}
