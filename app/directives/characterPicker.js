
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
                level: 1,
                pointsAvailable: 21,
                specials: JSON.parse("{\"strength\":{\"perks\":{\"Iron Fist\":{\"value\":0},\"Big Leagues\":{\"value\":0},\"Armorer\":{\"value\":0},\"Blacksmith\":{\"value\":0},\"Heavy Gunner\":{\"value\":0},\"Strong Back\":{\"value\":0},\"Steady Aim\":{\"value\":0},\"Basher\":{\"value\":0},\"Rooted\":{\"value\":0},\"Pain Train\":{\"value\":0}},\"value\":0},\"perception\":{\"perks\":{\"Pickpocket\":{\"value\":0},\"Rifleman\":{\"value\":0},\"Awareness\":{\"value\":0},\"Locksmith\":{\"value\":0},\"Demolition Expert\":{\"value\":0},\"Night Person\":{\"value\":0},\"Refractor\":{\"value\":0},\"Sniper\":{\"value\":0},\"Penetrator\":{\"value\":0},\"Concentrated Fire\":{\"value\":0}},\"value\":0},\"endurance\":{\"perks\":{\"Toughness\":{\"value\":0},\"Lead Belly\":{\"value\":0},\"Lifegiver\":{\"value\":0},\"Chem Resistant\":{\"value\":0},\"Aquaboy\":{\"value\":0},\"Rad Resistant\":{\"value\":0},\"Adamantium Skeleton\":{\"value\":0},\"Cannibal\":{\"value\":0},\"Ghoulish\":{\"value\":0},\"Solar Powered\":{\"value\":0}},\"value\":0},\"charisma\":{\"perks\":{\"Cap Collector\":{\"value\":0},\"Lady Killer\":{\"value\":0},\"Lone Wanderer\":{\"value\":0},\"Attack Dog\":{\"value\":0},\"Animal Friend\":{\"value\":0},\"Local Leader\":{\"value\":0},\"Party Boy\":{\"value\":0},\"Inspirational\":{\"value\":0},\"Wasteland Whisperer\":{\"value\":0},\"Intimidation\":{\"value\":0}},\"value\":0},\"intelligenece\":{\"perks\":{\"VANS\":{\"value\":0},\"Medic\":{\"value\":0},\"Gun Nut\":{\"value\":0},\"Hacker\":{\"value\":0},\"Scrapper\":{\"value\":0},\"Science!\":{\"value\":0},\"Chemist\":{\"value\":0},\"Robotics Expert\":{\"value\":0},\"Nuclear Physicist\":{\"value\":0},\"Nerg Rage!\":{\"value\":0}},\"value\":0},\"agility\":{\"perks\":{\"Gunslinger\":{\"value\":0},\"Commando\":{\"value\":0},\"Sneak\":{\"value\":0},\"Mister Sandman\":{\"value\":0},\"Action Boy\":{\"value\":0},\"Moving Target\":{\"value\":0},\"Ninja\":{\"value\":0},\"Quick Hands\":{\"value\":0},\"Blitz\":{\"value\":0},\"Gun Fu\":{\"value\":0}},\"value\":0},\"luck\":{\"perks\":{\"Fortune Finder\":{\"value\":0},\"Scrounger\":{\"value\":0},\"Bloody Mess\":{\"value\":0},\"Mysterious Stranger\":{\"value\":0},\"Idiot Savant\":{\"value\":0},\"Better Criticals\":{\"value\":0},\"Critical Banker\":{\"value\":0},\"Grim Reaper's Sprint\":{\"value\":0},\"Four Leaf Clover\":{\"value\":0},\"Ricochet\":{\"value\":0}},\"value\":0}}")
            };

            coreService.createCharacter(newCharacter).then(function(character) {
                scope.characters.push(character);
                scope.setActiveCharacter(character.id);
            });
        };
    }
}
