'use strict';

/**
 * @ngdoc function
 * @name candidateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the candidateApp
 */
angular.module('candidateApp')
  .controller('AboutCtrl', ['$http', '$scope', 'CandidateService', function($http, $scope, CandidateService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.thing = CandidateService;

  }]);
