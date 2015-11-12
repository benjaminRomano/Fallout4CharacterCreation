
var app = angular.module('characterCreator', [])
    .controller('MainController', ['$scope', mainController]);

function mainController($scope) {
    $scope.name = "Fallout 4 Character Creator";
}
