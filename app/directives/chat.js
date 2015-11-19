
angular.module('characterCreator')
    .directive('chat', ['socketService', chat]);

function chat(socketService) {
    return {
        restrict: 'E',
        scope: {
            user: '='
        },
        templateUrl: 'partials/chat.html',
        link: link
    };

    function link(scope, element, attrs) {
        scope.messages = [];

        socketService.on('message-received', function(message) {
            console.log(message);
            scope.messages.push(message);
            if(scope.messages.length > 30) {
                scope.messages.shift();
            }
        });

        scope.addMessage = function(message) {
            socketService.emit('message-sent', scope.user.name + ": " + message);
        }
    }
}
