
angular.module('characterCreator')
    .directive('permissionAdder', ['coreService', permissionAdder]);

function permissionAdder(coreService) {
    return {
        restrict: 'E',
        templateUrl: 'partials/permissionAdder.html',
        link: link
    };

    function link(scope, element, attrs) {
        scope.addPermissions = function() {
            coreService.addPermissions(scope.activeCharacter.id, scope.email);
        };
    }
}
