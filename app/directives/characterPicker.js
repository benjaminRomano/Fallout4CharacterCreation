
angular.module('characterCreator')
    .directive('characterPicker', ['coreService', characterPicker]);

function characterPicker(coreService) {
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

        scope.setActiveCharacter = function(id) {
            for(var i = 0; i < scope.characters.length; i++) {
                if(scope.characters[i].id === id) {
                    scope.activeCharacterIndex = i;
                    scope.activeCharacter = scope.characters[i];
                    scope.activeCharacterIndex = i;
                }
            }
        };

    }
}
