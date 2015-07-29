'use strict';

/**
 * @ngdoc function
 * @name candidateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the candidateApp
 */
angular.module('candidateApp')
  .controller('EditCtrl', ['$http', '$scope', 'CandidateService', '$location', '$routeParams', function($http, $scope, CandidateService, $location, $routeParams) {

      CandidateService.getCandidates()
      .success(function(returnData){
        $scope.candidates = returnData;
      }).error(function (){
        $scope.errorMsg = "database error";
      });
      $scope.candidates = [
        {name: 'John', employed: true, jobid: 1, available: 20150801, email: 'john@mail.com', street: '1 first street', state: 'VIC', desired: 70000, current: 60000},
        {name: 'Kate', employed: false, jobid: 2, available: 20150901, email: 'kate@mail.com', street: '2nd street', state: 'NSW', desired: 90000, current: 0},
        {name: 'Mike', employed: true, jobid: 3, available: 20150820, email: 'mike@mail.com', street: '3rd street', state: 'QLD', desired: 80000, current: 70000}
      ]
      
      $scope.candidate = $scope.candidates[$routeParams.id];
      
      $scope.save = function () {
        $location.path("/");
      }

  }]);
