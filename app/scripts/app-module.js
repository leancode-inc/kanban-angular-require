/*jshint unused: vars */
define([
        'angular',
        'angular-ui-router',
        'require-config',
        'header/header-module',
        'footer/footer-module',
        'dashboard/dashboard-module',
        'user-story/user-story-module'
    ],
    function (angular,
              angularUiRouter,
              requireConfig) {
        'use strict';

        var appModule = angular.module('kanbanApp', [
            'ui.router',
            'headerModule',
            'footerModule',
            'dashboardModule',
            'userStoryModule'
        ]);


        appModule.config(requireConfig);
        return appModule;

    });
