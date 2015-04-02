define([], function () {
    'use strict';

    var UserStoryCreateController = function ($http, $state) {
        var that = this;

        that.create = function createFn(userStory) {
            $http.post('some_url', userStory)
                .success(function (response) {
                    $state.go('app.userStory.list')
                })
        }

    };

    UserStoryCreateController.$inject = ['$http', '$state'];
    return UserStoryCreateController;

});
