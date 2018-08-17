(function () {
    'use strict';
    angular.module('NewsApp')
    .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider', 'NotificationProvider', '$httpProvider'];

    function Config($stateProvider, $urlRouterProvider, NotificationProvider, $httpProvider) {
        console.log('NewsApp Config loaded !!!');

        // $httpProvider.interceptors.push('HttpRequestInterceptor');
        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'left',
            positionY: 'bottom'
        });

        $stateProvider.

        state('home', {
            name: 'home',
            url: '/home',
            templateUrl: './app/components/home/home.view.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        });

        $urlRouterProvider.otherwise('/home');
    }
})();
