define([
        'angular',
        'dashboard/dashboard-controller'
    ],
    function (angular,
              DashboardController) {
        'use strict';

        var dashboardModule = angular.module('dashboardModule', []);
        dashboardModule.controller('DashboardController', DashboardController);

    });
