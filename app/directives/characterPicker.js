
angular.module('characterCreator')
    .directive('characterPicker', ['coreService', 'socketService', characterPicker]);

function characterPicker(coreService, socketService) {
    return {
        restrict: 'E',
        templateUrl: 'partials/characterPicker.html',
        link: link
    };

    function link(scope, element, attrs) {
        scope.createCharacter = function() {
            var newCharacter = {
                name: 'NEW CHARACTER',
                level: 1
            };

            coreService.createCharacter(newCharacter).then(function(character) {
                scope.characters.push(character);
                scope.setActiveCharacter(character.id);
            });
        };
    }
}
