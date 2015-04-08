define([],
    function () {
        'use strict';

        var appConfig = function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/dashboard');

            $stateProvider
                .state('app', {
                    abstract: true,
                    views: {
                        'header': {
                            templateUrl: 'scripts/header/header.html',
                            controller: 'HeaderController as headerController'
                        },
                        'content': {
                            template: '<ui-view></ui-view>'
                        },
                        'footer': {
                            templateUrl: 'scripts/footer/footer.html'
                        }
                    }
                })
                .state('app.dashboard', {
                    url: '/dashboard',
                    views: {
                        '': {
                            templateUrl: 'scripts/dashboard/dashboard.html',
                            controller: 'DashboardController as controller'
                        }
                    }
                })
                .state('app.userStory', {
                    abstract: true,
                    url: '/user-stories'
                })
                .state('app.userStory.list', {
                    url: '/',
                    views: {
                        '@app': {
                            templateUrl: 'scripts/user-story/list/user-story-list.html',
                            controller: 'UserStoryListController as controller'
                        }
                    }
                })
                .state('app.userStory.view', {
                    url: '/:id',
                    views: {
                        '@app': {
                            templateUrl: 'scripts/user-story/view/user-story.html',
                            controller: 'UserStoryController as controller'
                        }
                    }
                })
                .state('app.userStory.create', {
                    url: '/new',
                    views: {
                        '@app': {
                            templateUrl: 'scripts/user-story/create/user-story-create.html',
                            controller: 'UserStoryCreateController as controller'
                        }
                    }
                });

        };

        appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
        return appConfig;

    });
