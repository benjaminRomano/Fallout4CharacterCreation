
angular.module('characterCreator')
    .controller('MainController', ['$scope', 'coreService', mainController]);

function mainController($scope, coreService) {
    $scope.user = null;
    $scope.activeCharacter = null;
    $scope.isSaving = false;

    coreService.getUserInfo().then(function(userInfo){
        $scope.user = userInfo.user;
        $scope.characters = userInfo.characters;

        if($scope.characters.length) {
            $scope.activeCharacterIndex = 0;
            $scope.activeCharacter = $scope.characters[0];
        }
    });


}
