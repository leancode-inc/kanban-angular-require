/*jshint unused: vars */
define([
        'angular',
        'angular-mocks',
        'angular-ui-router',
        'header/header-module'
    ],
    function () {
        'use strict';

        describe('Header Module', function () {

            beforeEach(module('headerModule'));

            var headerController,
                scope;

            beforeEach(inject(function ($controller, $rootScope) {
                scope = $rootScope.$new();
                headerController = $controller('HeaderController', {
                    $scope: scope
                });
            }));

            it('should be defined', function () {
                expect(headerController).toBeDefined();
            });
        });
    });
