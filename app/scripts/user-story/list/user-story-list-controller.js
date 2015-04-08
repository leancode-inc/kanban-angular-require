define([], function () {
    'use strict';

    var UserStoryListController = function (UserStoryService) {
        var that = this;

        that.init = function () {
            UserStoryService.getAll()
                .success(function (response) {
                    that.userStories = response;
                });
        };
    };

    UserStoryListController.$inject = ['UserStoryService'];
    return UserStoryListController;

});
