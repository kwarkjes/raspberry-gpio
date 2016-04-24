module.exports = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider

    .state('index', {
        url: '/',
        views: {
            app: {
                controller: 'GpioBoardController',
                templateUrl: 'templates/gpio-board.html',
            },
        }
    });
};
