/* globals describe */
define([
    'angular',
    'angular-mocks',
    'user-story/user-story-module'
    ], function () {
    'use strict';

    describe('User Story View', function () {

        var controller;
        beforeEach(module('userStoryModule'));

        beforeEach(inject(function ($rootScope, $controller) {
            var $scope = $rootScope.$new();
            controller = $controller('UserStoryController', {
                $scope: $scope
            });
        }));

        it('should be defined', function () {
            expect(controller).toBeDefined();
        });

    });

});
