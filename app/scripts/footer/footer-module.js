define([
        'angular',
        'footer/footer-controller'
    ],
    function (angular,
              FooterController) {
        'use strict';

        var footerModule = angular.module('footerModule', []);
        footerModule.controller('FooterController', FooterController);

    });
