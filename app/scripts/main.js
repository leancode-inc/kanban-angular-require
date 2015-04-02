/*jshint unused: vars */
require.config({
    paths: {
        angular: '../../bower_components/angular/angular',
        'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
        'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'angular-ui-router': [
            'angular'
        ],
        'angular-mocks': {
            deps: [
                'angular'
            ],
            exports: 'angular.mock'
        }
    },
    priority: [
        'angular'
    ],
    packages: [

    ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
    'angular',
    'app-module'
], function (angular, appModule) {
    'use strict';

    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element($html).ready(function () {
        angular.resumeBootstrap([appModule.name]);
    });
});
