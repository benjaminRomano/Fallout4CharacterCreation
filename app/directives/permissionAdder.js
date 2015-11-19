
angular.module('characterCreator')
    .directive('permissionAdder', ['coreService', permissionAdder]);

function permissionAdder(coreService) {
    return {
        restrict: 'E',
        scope: {
            character: '='
        },
        templateUrl: 'partials/permissionAdder.html',
        link: link
    };

    function link(scope, element, attrs) {
        scope.addPermissions = function() {
            if(!scope.email || !scope.character) {
                return;
            }
            coreService.addPermissions(scope.character.id, scope.email);
            scope.email = "";
        };
    }
}
