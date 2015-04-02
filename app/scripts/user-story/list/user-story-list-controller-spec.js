/* globals describe */
define([
    'angular',
    'angular-mocks',
    'user-story/user-story-module'
    ], function () {
    'use strict';

    describe('User Story List', function () {

        var controller;
        beforeEach(module('userStoryModule'));

        beforeEach(inject(function ($rootScope, $controller) {
            var $scope = $rootScope.$new();
            controller = $controller('UserStoryListController', {
                $scope: $scope
            });
        }));

        it('should be defined', function () {
            expect(controller).toBeDefined();
        });



    });

});
