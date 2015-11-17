
angular.module('characterCreator')
    .controller('MainController', ['$scope', 'coreService', 'socketService', '$timeout', mainController]);

function mainController($scope, coreService, socketService, $timeout) {
    $scope.user = null;
    $scope.characters = [];
    $scope.character = null;
    $scope.isSaving = false;
    $scope.isSynced = true;

    $scope.isReady = function() {
        return $scope.isSynced;
    };

    $scope.setCharacter = function(id) {
        if($scope.character && $scope.character.id === id) {
            return;
        }

        coreService.getCharacter(id)
            .then(updateCharacter)
            .then(function() {
                socketService.emit('joinRoom', $scope.character.id);
            }).catch(function() {
                //TODO: Handle failed get
            });
    };

    $scope.saveChanges = function() {
        if(!$scope.isSynced) {
            return;
        }

        $scope.isSaving = true;
        var promise;

        if(!$scope.character.id) {
            promise = coreService.createCharacter($scope.character);
        } else {
            promise = coreService.updateCharacter($scope.character);
        }

        promise.then(function() {
            socketService.emit('resync');
            $scope.isSaving = false;
        }, function() {
            //TODO: Handle save failed
        });
    };

    socketService.on('resync', function() {
        $scope.isSynced = false;

        coreService.getCharacter($scope.character.id)
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
        $scope.character = updatedCharacter;

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
            $scope.character = $scope.characters[0];
            socketService.emit('joinRoom', $scope.character.id);
        }
    });
}
