
angular.module('characterCreator')
    .directive('specialTable', ['coreService', specialTable]);

function specialTable(coreService) {
    return {
        restrict: 'E',
        templateUrl: 'partials/specialTable.html',
        link: link
    };

    function link(scope, element, attrs) {
    }
}
