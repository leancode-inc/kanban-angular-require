/*jshint unused: vars */
define([
    'angular',
    'angular-ui-router',
    'angular-formly',
    'angular-formly-templates-bootstrap',
    'require-config',
    'header/header-module',
    'footer/footer-module',
    'dashboard/dashboard-module',
    'user-story/user-story-module'
], function (
    angular,
    angularUiRouter,
    angularFormly,
    angularFormlyTemplatesBootstrap,
    requireConfig) {
    'use strict';

    var appModule = angular.module('kanbanApp', [
        'ui.router',
        'formly',
        'formlyBootstrap',
        'headerModule',
        'footerModule',
        'dashboardModule',
        'userStoryModule'
    ]);

    appModule.config(requireConfig);

    appModule.run(function () {

    });

    return appModule;

});
