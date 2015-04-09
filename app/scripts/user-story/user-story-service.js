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

        var create = function (userStory) {
            return $http.post(baseUrl + 'user-stories', userStory);
        };

        return {
            getAll: getAll,
            get: get,
            create: create
        };
    }

    userStoryService.$inject = ['$http'];
    return userStoryService;
});

