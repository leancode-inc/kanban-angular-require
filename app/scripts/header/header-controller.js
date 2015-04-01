define([
    'angular'
  ],
  function (angular) {
    'use strict';

    var HeaderController = function ($scope, $state) {
      $scope.$state = $state;
    };

    HeaderController.$inject = ['$scope', '$state'];
    return HeaderController;

  });
