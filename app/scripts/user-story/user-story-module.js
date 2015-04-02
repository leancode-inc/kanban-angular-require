define([
        'angular',
        'user-story/list/user-story-list-controller',
        'user-story/create/user-story-create-controller'
    ],
    function (angular,
              UserStoryListController,
              UserStoryCreateController
    ) {
        'use strict';

        var userStoryModule = angular.module('userStoryModule', ['ui.router']);

        userStoryModule.controller('UserStoryListController', UserStoryListController);
        userStoryModule.controller('UserStoryCreateController', UserStoryCreateController);

    });
