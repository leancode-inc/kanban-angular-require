/*jshint unused: vars */
require.config({
    paths: {
        angular: '../../bower_components/angular/angular',
        'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
        'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
        'api-check': '../../bower_components/api-check/dist/apiCheck',
        'angular-formly': '../../bower_components/angular-formly/dist/formly',
        'angular-formly-templates-bootstrap': '../../bower_components/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap'
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
        },
        'angular-formly': [
            'angular',
            'api-check'
        ]
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
