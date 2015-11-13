
angular.module('characterCreator')
    .factory('socketService', ['socketFactory', socketService]);

function socketService(socketFactory) {
    var socket = socketFactory();
    return socket;
}
