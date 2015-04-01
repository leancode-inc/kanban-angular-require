define([
    'angular',
    'backlog/backlog-list-controller',
    'backlog/create-backlog-controller',
    'backlog/update-backlog-controller'
  ],
  function (
    angular,
    BacklogListController,
    CreateBacklogController,
    UpdateBacklogController
  ) {
    'use strict';

    var backlogModule = angular.module('backlogModule', []);

    backlogModule.controller('BacklogListController', BacklogListController);
    backlogModule.controller('CreateBacklogController', CreateBacklogController);
    backlogModule.controller('UpdateBacklogController', UpdateBacklogController);

  });
