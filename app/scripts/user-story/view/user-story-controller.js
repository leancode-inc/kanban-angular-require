define([], function () {
    'use strict';

    var UserStoryController = function ($stateParams, UserStoryService) {
        var that = this;

        that.init = function () {
            UserStoryService.get($stateParams.id)
                .success(function (response) {
                    that.userStory = response;
                });
        };
    };

    UserStoryController.$inject = ['$stateParams', 'UserStoryService'];
    return UserStoryController;

});
