module.exports = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider

    .state('index', {
        url: '/',
        views: {
            app: {
                controller: 'RaspberryListController',
                templateUrl: 'templates/raspberry-list.html',
            },
        }
    })
    ;
};
