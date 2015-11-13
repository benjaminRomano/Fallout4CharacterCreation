
angular.module('characterCreator')
    .factory('coreService', ['$http', coreService]);

function coreService($http) {
    return {
        createCharacter: createCharacter,
        getCharacter: getCharacter,
        updateCharacter: updateCharacter,
        addPermissions: addPermissions,
        getUserInfo: getUserInfo
    };

    function createCharacter(character) {
        return $http.post('api/character/', character).then(function(response) {
            return response.data.character;
        });
    }

    function getCharacter(id) {
        return $http.get('api/character/' + id).then(function(response) {
            return response.data;
        });
    }

    function updateCharacter(character) {
        return $http.put('api/character/', character).then(function(response) {
            return response.data;
        });
    }

    function addPermissions(characterId, email) {
        return $http.post('/auth/permissions/', {
            id: characterId,
            email: email
        }).then(function(response) {
            return response.data;
        });
    }

    function getUserInfo() {
        return $http.get('/auth/info').then(function(response) {
            return response.data;
        });
    }
}
