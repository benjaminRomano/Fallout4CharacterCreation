
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

        //VALIDATION CODE FOR LEVEL - Ugly...
        scope.isReady = function() {
            return scope.isSynced && !scope.isSaving;
        };

        scope.canIncrementLevel = function() {
            return true && scope.isReady();
        };

        scope.canDecrementLevel = function() {
            for(var specialName in scope.specials) {
                var special = scope.specials[specialName];
                for(var perkName in scope.specials[specialName].perks) {
                    var perk = special.perks[perkName];
                    var perkValue = scope.activeCharacter.specials[specialName].perks[perkName].value;
                    if(perkValue !== 0 && perk.ranks[perkValue].playerLevelRequired > scope.activeCharacter.level - 1) {
                        return false;
                    }
                }
            }
            return scope.activeCharacter.level > 1 && scope.activeCharacter.pointsAvailable > 0 && scope.isReady();
        };

        scope.decrementLevel = function() {
            scope.activeCharacter.level -= 1;
            scope.activeCharacter.pointsAvailable -= 1;
            scope.saveChanges();
        };

        scope.incrementLevel = function() {
            scope.activeCharacter.level += 1;
            scope.activeCharacter.pointsAvailable += 1;
            scope.saveChanges();
        };

        //VALIDATION CODE FOR SPECIALS - ... Even uglier...

        scope.canDecrement = function(specialName, perkName) {
            var special = scope.activeCharacter.specials[specialName];
            if(!perkName) {
                return special.value > 0 && scope.isReady();
            }
            var perk = special.perks[perkName];
            return perk.value > 0 && scope.isReady();
        };

        scope.canIncrement = function(specialName, perkName) {
            if(scope.activeCharacter.pointsAvailable <= 0) {
                return false;
            }

            var special = scope.activeCharacter.specials[specialName];
            if(!perkName) {
                return true && scope.isReady();
            }

            var perk = special.perks[perkName];
            var perkInfo = scope.specials[specialName].perks[perkName];

            return perkInfo.ranks[perk.value + 1] &&
                perkInfo.ranks[perk.value + 1].playerLevelRequired <= scope.activeCharacter.level &&
                perkInfo.specialLevelRequired <= special.value && scope.isReady();
        };

        function incrementOrDecrement(specialName, perkName, isIncrement) {
            var special = scope.activeCharacter.specials[specialName];
            scope.activeCharacter.pointsAvailable += isIncrement ? -1 : 1;

            if(!perkName) {
                special.value = special.value + (isIncrement ? 1 : -1);
                scope.saveChanges();
                return;
            }

            var perk = special.perks[perkName];
            perk.value = perk.value + (isIncrement ? 1 : -1);
            scope.saveChanges();
        }

        scope.increment = function(specialName, name) {
            incrementOrDecrement(specialName, name, true);
        };

        scope.decrement = function(specialName, name) {
            incrementOrDecrement(specialName, name, false);
        };
    }
}
