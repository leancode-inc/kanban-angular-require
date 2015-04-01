/* globals describe */
'use strict';

describe('Backlog list', function () {

  var controller;
  beforeEach(module('kanbanApp'));

  beforeEach(inject(function ($rootScope, $controller) {
    var $scope = $rootScope.$new();
    controller = $controller('UpdateBacklogController', {
      $scope: $scope
    });
  }));

  it('should be defined', function () {
    expect(controller).toBeDefined();
  });

});
