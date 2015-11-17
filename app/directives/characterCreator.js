
angular.module('characterCreator')
    .directive('characterCreator', ['coreService', 'socketService', '$timeout', 'SPECIALS', characterCreator]);

function characterCreator(coreService, socketService, $timeout, SPECIALS) {
    return {
        restrict: 'E',
        scope: {
            isReady: '=',
            saveChanges: '=',
            character: '='
        },
        templateUrl: 'partials/characterCreator.html',
        link: link
    };

    function link(scope, element, attrs) {
        scope.specials = SPECIALS;

        scope.canIncrementLevel = function() {
            return scope.isReady();
        };

        scope.canDecrementLevel = function() {
            for(var specialName in SPECIALS) {
                var special = SPECIALS[specialName];
                for(var perkName in SPECIALS[specialName].perks) {
                    var perk = special.perks[perkName];
                    var perkValue = scope.character.specials[specialName].perks[perkName].value;
                    if(perkValue !== 0 && perk.ranks[perkValue].playerLevelRequired > scope.character.level - 1) {
                        return false;
                    }
                }
            }
            return scope.character.level > 1 && scope.character.pointsAvailable > 0 && scope.isReady();
        };

        scope.decrementLevel = function() {
            scope.character.level -= 1;
            scope.character.pointsAvailable -= 1;
            scope.saveChanges();
        };

        scope.incrementLevel = function() {
            scope.character.level += 1;
            scope.character.pointsAvailable += 1;
            scope.saveChanges();
        };


    }
}
