define([
        'angular',
        'header/header-controller'
    ],
    function (angular,
              HeaderController) {
        'use strict';

        var headerModule = angular.module('headerModule', []);
        headerModule.controller('HeaderController', HeaderController);

    });
