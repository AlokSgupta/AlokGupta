var mainApp = angular.module('mainApp', [
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad',
    'ngResource'
]);

mainApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/app/dashboard');
    // $locationProvider.html5Mode(true);
    $stateProvider
        .state('app', {
            url: '/app',
            templateUrl: 'template/app.html',
            abstract: true
        })

          // System dashboard
        .state('app.dashboard', {
            url: '/dashboard',
            templateUrl: 'module/home/SystemDashboard.html',
            data: {
                pageTitle: 'Home Page- Alok Gupta'
            },
            files: [

            ]

        })


       

}]);


mainApp.run(['$rootScope', '$state', 'setting', function ($rootScope, $state, setting) {
    $rootScope.$state = $state;
    $rootScope.setting = setting;
}]);
