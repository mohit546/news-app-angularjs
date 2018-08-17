(function () {
    'use strict';
    angular.module('NewsApp')
    .factory('homeService', HomeService);
    HomeService.$inject = ['$http'];
    function HomeService($http) {
        console.log('HomeService loaded !!!');

        var apiKey = '6410972268a5480c87061f68102066ef';

        var service = {
            getNewsHeadlines: getNewsHeadlines
        };

        return service;

        ////////////

        function getNewsHeadlines() {
            return $http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + apiKey)
                .then(getNewsHeadlinesComplete)
                .catch(getNewsHeadlinesFailed);

            function getNewsHeadlinesComplete(response) {
                return response.data;
            }

            function getNewsHeadlinesFailed(error) {
                console.log('XHR Failed for getAvengers.' + error.data);
            }
        }
    }
})();
