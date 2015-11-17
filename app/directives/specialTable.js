
angular.module('characterCreator')
    .directive('specialTable', ['coreService', 'SPECIALS', specialTable]);

function specialTable(coreService, SPECIALS) {
    return {
        restrict: 'E',
        scope: {
            saveChanges: '=',
            isReady: '=',
            character: '=',
        },
        templateUrl: 'partials/specialTable.html',
        link: link
    };

    function link(scope, element, attrs) {
        scope.specials = SPECIALS;

        scope.canDecrement = function(specialName, perkName) {
            var special = scope.character.specials[specialName];
            if(!perkName) {
                return special.value > 0 && scope.isReady();
            }
            var perk = special.perks[perkName];
            return perk.value > 0 && scope.isReady();
        };

        scope.canIncrement = function(specialName, perkName) {
            if(scope.character.pointsAvailable <= 0) {
                return false;
            }

            var special = scope.character.specials[specialName];
            if(!perkName) {
                return true && scope.isReady();
            }

            var perk = special.perks[perkName];
            var perkInfo = SPECIALS[specialName].perks[perkName];

            return perkInfo.ranks[perk.value + 1] &&
                perkInfo.ranks[perk.value + 1].playerLevelRequired <= scope.character.level &&
                perkInfo.specialLevelRequired <= special.value && scope.isReady();
        };

        scope.increment = function(specialName, name) {
            incrementOrDecrement(specialName, name, true);
        };

        scope.decrement = function(specialName, name) {
            incrementOrDecrement(specialName, name, false);
        };

        function incrementOrDecrement(specialName, perkName, isIncrement) {
            var special = scope.character.specials[specialName];
            scope.character.pointsAvailable += isIncrement ? -1 : 1;

            if(!perkName) {
                special.value = special.value + (isIncrement ? 1 : -1);
                scope.saveChanges();
                return;
            }

            var perk = special.perks[perkName];
            perk.value = perk.value + (isIncrement ? 1 : -1);
            scope.saveChanges();
        }
    }
}
