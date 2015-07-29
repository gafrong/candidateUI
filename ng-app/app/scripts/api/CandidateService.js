'use strict';

angular.module('candidateApp')
  .factory('CandidateService', ['$http', function($http){
    var endpoint = {
      GetCandidates:'/api/v1/candidate.json',
      PostCandidate: '/api/v1/candidate'
    };
    return {
      getCandidates: function (returnData) {
        returnData = returnData || {};
        returnData.take = returnData.take || 10;
        returnData.skip = returnData.skip || 0;
        return $http.get(endpoint.GetCandidates);
      },
      postCandidate: function(name, employed, available, email, street, state, desired, current){
        return $http.post(endpoint.PostCandidate, {
          name: name, 
          employed: employed, 
          available: available, 
          email: email,
          street: street,
          state: state,
          desired: desired,
          current: current
        });
      }
    };
  }]);