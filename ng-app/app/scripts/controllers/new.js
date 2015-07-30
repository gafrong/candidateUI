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
      
      // CandidateService.getCandidates()
      // .success(function(returnData){
      //   $scope.candidates = returnData;
      //   $scope.successMsg = "success!";
      //   console.log('success');
      // }).error(function (){
      //   $scope.errorMsg = "database error";
      //   console.log('error');
      // });

      $scope.candidates = [
        {name: 'John', employed: true, jobid: 1, available: 20150801, email: 'john@mail.com', street: '1 first street', state: 'VIC', desired: 70000, current: 60000},
        {name: 'Kate', employed: false, jobid: 2, available: 20150901, email: 'kate@mail.com', street: '2nd street', state: 'NSW', desired: 90000, current: 0},
        {name: 'Mike', employed: true, jobid: 3, available: 20150820, email: 'mike@mail.com', street: '3rd street', state: 'QLD', desired: 80000, current: 70000}
      ]

      $scope.candidate = {
        name: "",
        employed: "",
        available: "",
        email: "",
        street: "",
        desired: "",
        current: ""
      }
      $scope.save = function () {
        $scope.candidates.push($scope.candidate);
        console.log($scope.candidates);
        $location.path("#/");
      }

  }]);
