/* globals describe */
define([
    'angular',
    'angular-mocks',
    'angular-ui-router',
    'user-story/user-story-module'
    ], function () {
    'use strict';

    describe('User Story List', function () {

        var controller, $state, $httpBackend;
        beforeEach(module('userStoryModule'));

        beforeEach(inject(function ($rootScope, $controller, _$state_, _$httpBackend_) {
            var $scope = $rootScope.$new();
            $state = _$state_;
            $httpBackend = _$httpBackend_;

            controller = $controller('UserStoryCreateController', {
                $scope: $scope
            });
        }));

        it('should be defined', function () {
            expect(controller).toBeDefined();
        });

        describe('when creating a new user story', function () {

            describe('succeeds', function () {

                it('should redirect the user to list page', function () {
                    var userStory = {};
                    spyOn($state, 'go');
                    $httpBackend.whenPOST('some_url').respond(200);

                    controller.create(userStory);

                    $httpBackend.flush();
                    expect($state.go).toHaveBeenCalled();
                });

            });

            describe('fails', function () {

                it('should redirect the user to list page', function () {
                    var userStory = {};
                    spyOn($state, 'go');
                    $httpBackend.whenPOST('some_url').respond(500);

                    controller.create(userStory);
                    $httpBackend.flush();
                    expect($state.go).not.toHaveBeenCalled();
                });

            });

        });




    });

});
