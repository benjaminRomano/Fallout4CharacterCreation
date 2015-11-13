
angular.module('characterCreator')
    .directive('characterCreator', ['coreService', characterCreator]);

function characterCreator(coreService) {
    return {
        restrict: 'E',
        templateUrl: 'partials/characterCreator.html',
        link: link
    };

    function link(scope, element, attrs) {
        var saveChanges = function() {
            console.log('called');
            scope.isSaving = true;
            var promise = null;

            if(!scope.activeCharacter.id) {
                promise = coreService.createCharacter(scope.activeCharacter);
            } else {
                promise = coreService.updateCharacter(scope.activeCharacter);
            }

            promise.then(function() {
                scope.isSaving = false;
            }, function() {
                scope.isSaving = false;
            });
        };

        scope.activeCharacterChanged = saveChanges;

        scope.$watch('activeCharacter', function(activeCharacter, oldValue) {
            if(oldValue === activeCharacter) {
                return;
            }

            saveChanges();
        });

    }


}
