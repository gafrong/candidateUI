'use strict';

/**
 * @ngdoc function
 * @name candidateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the candidateApp
 */
angular.module('candidateApp')
  .controller('NewCtrl', ['$http', '$scope', 'CandidateService', '$location', function($http, $scope, CandidateService, $location) {
      
      CandidateService.getCandidates()
      .success(function(returnData){
        $scope.candidates = returnData;
        $scope.successMsg = "success!";
        console.log('success');
      }).error(function (){
        $scope.errorMsg = "database error";
        console.log('error');
      });

      $scope.person = {
        name: "",
        employed: "",
        available: "",
        email: "",
        street: "",
        desired: "",
        current: ""
      }
      $scope.save = function () {
        console.log($scope.candidates);
        $scope.candidates.push($scope.person);
        $location.path("/");
      }

  }]);
