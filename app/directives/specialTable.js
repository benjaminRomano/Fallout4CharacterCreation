
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
        console.log(SPECIALS);
        scope.specials = SPECIALS;
        scope.specialValues = [
            "strength",
            "perception",
            "endurance",
            "charisma",
            "intelligence",
            "agility",
            "luck"
        ];

        scope.activeSpecialIndex = 0;

        scope.next = function() {
            if(scope.activeSpecialIndex + 1 < scope.specialValues.length) {
                scope.activeSpecialIndex++;
            }
        }

        scope.back = function() {
            if(scope.activeSpecialIndex - 1 >= 0) {
                scope.activeSpecialIndex--;
            }
        }
    }
}
