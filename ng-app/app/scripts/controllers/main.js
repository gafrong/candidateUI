'use strict';

angular.module('candidateApp')
  .controller('MainCtrl', ['$http', '$scope', 'CandidateService', function ($http, $scope, CandidateService) {
   
    $scope.heading = 'Candidates';
    $scope.candidates = [];
    $scope.successMsg = "";
    $scope.errorMsg = "";
    $scope.candidateIndex = "";

    $scope.getList= function() {

      CandidateService.getCandidates()
      .success(function(returnData){
        $scope.candidates = returnData;
        $scope.successMsg = "success!";
        console.log('success');
      }).error(function (){
        $scope.errorMsg = "database error";
        console.log('error');
      });
    };

    $scope.editCandidate = function(index) {
      $scope.candidateIndex = index;
    }

    $scope.getList();

  }]);
