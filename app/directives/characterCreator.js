
angular.module('characterCreator')
    .directive('characterCreator', ['coreService', 'socketService', '$timeout', characterCreator]);

function characterCreator(coreService, socketService, $timeout) {
    return {
        restrict: 'E',
        templateUrl: 'partials/characterCreator.html',
        link: link
    };

    function link(scope, element, attrs) {
        scope.saveChanges = function() {
            if(!scope.isSynced) {
                return;
            }

            scope.isSaving = true;
            var promise;

            if(!scope.activeCharacter.id) {
                promise = coreService.createCharacter(scope.activeCharacter);
            } else {
                promise = coreService.updateCharacter(scope.activeCharacter);
            }

            promise.then(function() {
                socketService.emit('resync');
                scope.isSaving = false;
            }, function() {
                //TODO: Handle save failed
            });
        };
    }
}
