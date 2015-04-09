define([], function () {
    'use strict';

    var UserStoryCreateController = function ($state, UserStoryService) {
        var that = this;

        that.newUserStory = {};

        that.create = function createFn(userStory) {
            UserStoryService.create(userStory)
                .success(function (response) {
                    $state.go('app.userStory.list')
                })
        };

        that.fields = [
            {
                key: 'title',
                type: 'input',
                templateOptions: {
                    label: 'Title',
                    placeholder: 'Enter title here'
                }
            },
            {
                key: 'description',
                type: 'textarea',
                templateOptions: {
                    label: 'Description',
                    placeholder: 'Enter description here'
                }
            }
        ];

    };

    UserStoryCreateController.$inject = ['$state', 'UserStoryService'];
    return UserStoryCreateController;

});
