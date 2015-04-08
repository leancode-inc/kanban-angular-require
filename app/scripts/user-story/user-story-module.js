define([
        'angular',
        'user-story/list/user-story-list-controller',
        'user-story/view/user-story-controller',
        'user-story/create/user-story-create-controller',
        'user-story/user-story-service'
    ],
    function (angular,
              UserStoryListController,
              UserStoryController,
              UserStoryCreateController,
              UserStoryService
    ) {
        'use strict';

        var userStoryModule = angular.module('userStoryModule', ['ui.router']);

        userStoryModule.controller('UserStoryListController', UserStoryListController);
        userStoryModule.controller('UserStoryController', UserStoryController);
        userStoryModule.controller('UserStoryCreateController', UserStoryCreateController);
        userStoryModule.factory('UserStoryService', UserStoryService);

    });
