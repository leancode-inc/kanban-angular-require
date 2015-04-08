define([], function () {
    'use strict';

    function userStoryService($http) {


        var baseUrl = 'http://localhost:3000/';

        var getAll = function () {
            return $http.get(baseUrl + 'user-stories');
        };

        var get = function (id) {
            return $http.get(baseUrl + 'user-stories/' + id);
        };

        return {
            getAll: getAll,
            get: get
        };
    }

    userStoryService.$inject = ['$http'];
    return userStoryService;
});

