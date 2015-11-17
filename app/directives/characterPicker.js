
angular.module('characterCreator')
    .directive('characterPicker', ['coreService', 'CHARACTER', characterPicker]);

function characterPicker(coreService, CHARACTER) {
    return {
        restrict: 'E',
        templateUrl: 'partials/characterPicker.html',
        scope: {
            character: '=',
            characters: '=',
            isReady: '=',
            setCharacter: '='
        },
        link: link
    };

    function link(scope, element, attrs) {
        scope.createCharacter = function() {
            coreService.createCharacter(CHARACTER.DEFAULT).then(function(character) {
                scope.characters.push(character);
                scope.setCharacter(character.id);
            });
        };


    }
}
