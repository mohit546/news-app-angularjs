(function () {
    'use strict';
    angular.module('NewsApp')
    .controller('homeController', HomeController);
    HomeController.$inject = ['$scope', 'homeService'];
    function HomeController($scope, homeService){
        console.log('HomeController loaded !!!');

        var vm = this;
        vm.$onInit = onInit;
        vm.title = 'Some title';
        vm.getNewsHeadlinesList = [];

        function onInit(){
            getNewsHeadlinesCall();
        }

        $scope.$watch(
            angular.bind(vm, function () { return vm.title; }),
            function (newVal, oldVal) {
                // now we will pickup changes to newVal and oldVal
                console.log('newVal ---> ', newVal);
                console.log('oldVal ---> ', oldVal);
            }
        );

        vm.newsClickEvent = function(url){
            console.log('newsClickEvent called ');
            window.open(url, '_blank');
        };

        function getNewsHeadlinesCall() {
            return getNewsHeadlines().then(function (data) {
                console.info('NewsHeadlines', data);
            });
        }

        function getNewsHeadlines() {
            return homeService.getNewsHeadlines()
            .then(function (data) {
                vm.getNewsHeadlinesList = data.articles;
                return vm.getNewsHeadlinesList;
            });
        }
    }
})();
