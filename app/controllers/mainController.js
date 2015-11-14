
angular.module('characterCreator')
    .controller('MainController', ['$scope', 'coreService', 'socketService', '$timeout', mainController]);

function mainController($scope, coreService, socketService, $timeout) {
    $scope.user = null;
    $scope.characters = [];
    $scope.activeCharacter = null;
    $scope.isSaving = false;
    $scope.isSynced = true;

    coreService.getSpecials().then(function(specials) {
        $scope.specials = specials;
    }).catch(function(){
        //TODO: Handle error
    });

    $scope.setActiveCharacter = function(id) {
        if($scope.activeCharacter && $scope.activeCharacter.id === id) {
            return;
        }

        coreService.getCharacter(id)
            .then(updateCharacter)
            .then(function() {
                socketService.emit('joinRoom', $scope.activeCharacter.id);
            }).catch(function() {
                //TODO: Handle failed get
            });
    };


    socketService.on('resync', function() {
        $scope.isSynced = false;

        coreService.getCharacter($scope.activeCharacter.id)
            .then(updateCharacter)
            .then(function() {
                $timeout(function() {
                    $scope.isSynced = true;
                }, 200);
            }).catch(function() {
                //TODO: Handle error
            });
    });

    function updateCharacter(updatedCharacter) {
        $scope.activeCharacter = updatedCharacter;

        var index = 0;
        for(var i = 0; i < $scope.characters.length; i++) {
            if($scope.characters[i].id === updatedCharacter.id) {
                index = i;
            }
        }

        $scope.characters.splice(index, 1, updatedCharacter);
    }

    coreService.getUserInfo().then(function(userInfo){
        $scope.user = userInfo.user;

        socketService.emit('addName', $scope.user.name);
        $scope.characters = userInfo.characters;

        if($scope.characters.length) {
            $scope.activeCharacter = $scope.characters[0];
            socketService.emit('joinRoom', $scope.activeCharacter.id);
        }
    });
}
