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
        .state('app.backlog', {
          abstract: true,
          url: '/backlog'
        })
        .state('app.backlog.list', {
          url: '/list',
          views: {
            '@app': {
              templateUrl: 'scripts/backlog/backlog-list.html',
              controller: 'UpdateBacklogController as controller'
            }
          }
        })
        .state('app.backlog.create', {
          url: '/create',
          views: {
            '@app': {
              templateUrl: 'scripts/backlog/create-backlog.html',
              controller: 'UpdateBacklogController as controller'
            }
          }
        })
        .state('app.backlog.update', {
          url: '/update',
          views: {
            '@app': {
              templateUrl: 'scripts/backlog/update-backlog.html',
              controller: 'UpdateBacklogController as controller'
            }
          }
        });

    };

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    return appConfig;

  });
