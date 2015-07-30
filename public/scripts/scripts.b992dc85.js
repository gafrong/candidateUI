"use strict";angular.module("candidateApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/new",{templateUrl:"views/edit.html",controller:"NewCtrl"}).when("/edit/:id",{templateUrl:"views/edit.html",controller:"EditCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("candidateApp").controller("MainCtrl",["$http","$scope","CandidateService",function(a,b,c){b.heading="Candidates",b.candidates=[],b.successMsg="",b.errorMsg="",b.candidateIndex="",b.candidates=[{name:"John",employed:!0,jobid:1,available:20150801,email:"john@mail.com",street:"1 first street",state:"VIC",desired:7e4,current:6e4},{name:"Kate",employed:!1,jobid:2,available:20150901,email:"kate@mail.com",street:"2nd street",state:"NSW",desired:9e4,current:0},{name:"Mike",employed:!0,jobid:3,available:20150820,email:"mike@mail.com",street:"3rd street",state:"QLD",desired:8e4,current:7e4}],b.editCandidate=function(a){b.candidateIndex=a}}]),angular.module("candidateApp").controller("AboutCtrl",["$http","$scope","CandidateService",function(a,b,c){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.thing=c}]),angular.module("candidateApp").controller("NewCtrl",["$http","$scope","CandidateService","$location",function(a,b,c,d){b.candidates=[{name:"John",employed:!0,jobid:1,available:20150801,email:"john@mail.com",street:"1 first street",state:"VIC",desired:7e4,current:6e4},{name:"Kate",employed:!1,jobid:2,available:20150901,email:"kate@mail.com",street:"2nd street",state:"NSW",desired:9e4,current:0},{name:"Mike",employed:!0,jobid:3,available:20150820,email:"mike@mail.com",street:"3rd street",state:"QLD",desired:8e4,current:7e4}],b.candidate={name:"",employed:"",available:"",email:"",street:"",desired:"",current:""},b.save=function(){b.candidates.push(b.candidate),console.log(b.candidates),d.path("#/")}}]),angular.module("candidateApp").controller("EditCtrl",["$http","$scope","CandidateService","$location","$routeParams",function(a,b,c,d,e){var f=c.getCandidates();f.then(function(a){b.data=a,console.log(b.data),b.candidates=a}),b.candidates=[{name:"John",employed:!0,jobid:1,available:20150801,email:"john@mail.com",street:"1 first street",state:"VIC",desired:7e4,current:6e4},{name:"Kate",employed:!1,jobid:2,available:20150901,email:"kate@mail.com",street:"2nd street",state:"NSW",desired:9e4,current:0},{name:"Mike",employed:!0,jobid:3,available:20150820,email:"mike@mail.com",street:"3rd street",state:"QLD",desired:8e4,current:7e4}],b.candidate=b.candidates[e.id],b.selectState=function(a){console.log(a),b.candidate.state=a,console.log(b.candidate.state)},b.save=function(){d.path("#/")}}]),angular.module("candidateApp").factory("CandidateService",["$http",function(a){var b={GetCandidates:"/api/v1/candidate.json",PostCandidate:"/api/v1/candidate"};return{getCandidates:function(c){return c=c||{},c.take=c.take||10,c.skip=c.skip||0,a.get(b.GetCandidates)},postCandidate:function(c,d,e,f,g,h,i,j){return a.post(b.PostCandidate,{name:c,employed:d,available:e,email:f,street:g,state:h,desired:i,current:j})}}}]),angular.module("candidateApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p> {{thing}}"),a.put("views/edit.html",'<form name="myForm" class="form-horizontal"> <div class="form-group"> <label for="inputName" class="col-sm-3 control-label">Name: </label> <div class="col-sm-9"> <input type="text" name="name" class="form-control input-group" ng-model="candidate.name" placeholder="name" id="inputName" required> <span style="color:red" ng-show="myForm.name.$dirty && myForm.name.$invalid"> <span ng-show="myForm.name.$error.required">Name is required.</span> </span> </div> </div> <div class="form-group"> <label for="inputEmployed" class="col-sm-3 control-label">Employed: </label> <div class="col-sm-9"> <input type="radio" class="form-control input-group" ng-model="candidate.employed" placeholder="name" id="inputEmployed" ng-value="true" name="{{$parent.$index}}" required> <span class="float-left" ng-if="candidate.employed == true"> Yes</span><span ng-if="candidate.employed == false"> No</span> </div> </div> <div class="form-group"> <label for="inputEmail" class="col-sm-3 control-label">Email: </label> <div class="col-sm-9"> <input type="email" name="email" class="form-control input-group" ng-model="candidate.email" placeholder="email" id="inputEmail" required> <span style="color:red" ng-show="myForm.email.$dirty && myForm.email.$invalid"> <span ng-show="myForm.email.$error.required">Email is required.</span> </span> </div> </div> <div class="form-group"> <label for="inputStreet" class="col-sm-3 control-label">Street: </label> <div class="col-sm-9"> <input type="text" name="street" class="form-control input-group" ng-model="candidate.street" placeholder="street" id="inputStreet" required> <span style="color:red" ng-show="myForm.street.$dirty && myForm.street.$invalid"> <span ng-show="myForm.street.$error.required">Street is required.</span> </span> </div> </div> <div class="form-group"> <label for="dropdown" class="col-sm-3 control-label">State: </label> <div class="dropdown col-sm-9"> <a class="btn btn-default dropdown-toggle" type="button" name="state" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" required> {{candidate.state}} <span class="caret"></span> </a> <ul class="dropdown-menu" aria-labelledby="dropdownMenu1"> <li><a ng-click="selectState(\'VIC\')">VIC</a></li> <li><a ng-click="selectState(\'QLD\')">QLD</a></li> <li><a ng-click="selectState(\'TAS\')">TAS</a></li> <li><a ng-click="selectState(\'WA\')">WA</a></li> <li><a ng-click="selectState(\'SA\')">SA</a></li> <li><a ng-click="selectState(\'NSW\')">NSW</a></li> </ul> <span style="color:red" ng-show="myForm.state.$dirty && myForm.state.$invalid"> <span ng-show="myForm.state.$error.required">State is required.</span> </span> </div> </div> <div class="form-group"> <label for="inputDesired" class="col-sm-3 control-label">Desired Pay: </label> <div class="col-sm-9"> <input type="text" class="form-control input-group" ng-model="candidate.desired" placeholder="desired salary" id="inputDesired"> </div> </div> <div class="form-group" ng-if="candidate.employed == true"> <label for="inputCurrent" class="col-sm-3 control-label">Current Pay: </label> <div class="col-sm-9"> <input type="text" class="form-control input-group" ng-model="candidate.current" placeholder="current salary" id="inputCurrent"> </div> </div> <div class="center"> <button type="submit" ng-disabled="myForm.name.$invalid || myForm.email.$invalid && myForm.email.$dirty || myForm.street.$invalid && myForm.street.$dirty || myForm.state.$invalid && myForm.state.$dirty" ng-click="save()" class="btn-default btn-lg center">Submit</button> </div> </form>'),a.put("views/main.html",'<!-- <div class="container">\n  <div class="row">  --> <div> <a href="/"> <h2>Candidates</h2> </a> <table class="table table-striped"> <thead> <tr> <td>Name </td> <td>Email </td> <td>Street </td> <td>State </td> <td><a href="#/new"><i class="glyphicon glyphicon-plus"></i></a></td> </tr> </thead> <tbody> <tr ng-repeat="candidate in candidates"> <td>{{candidate.name}}</td> <td>{{candidate.email}}</td> <td>{{candidate.street}}</td> <td>{{candidate.state}}</td> <td><a href="#/edit/{{$index}}"><i class="glyphicon glyphicon-edit"></i></a></td> </tr> </tbody> </table> </div> <!--       <li class="col-sm-4 no-list-style center thumbnail">\n        \n          <h2 class="center">{{candidate.name}}</h2>\n            <p>{{candidate.email}}</p>\n            <p>{{candidate.street}}</p>\n            <p>{{candidate.state}}</p>\n            \n            <p ng-if="candidate.employed">\n              Current: <span>{{candidate.current | currency}}</span>\n            </p>\n            <p>\n              Desired: <span>{{candidate.desired | currency}}</span>\n            </p>\n            <label>  \n            Employed\n              <input type="radio" ng-model="candidate.employed" name="{{$parent.$index}}" ng-value="true">\n            </label>\n            <p>\n              <a  class="btn btn-default" ng-click="editCandidate($index)">Edit</a>\n            </p>   \n         \n      </li> --> <!--  </ul> --> <!--     <div class="center">\n      <div ng-if="candidateIndex === 0">\n        <input type="text" placeholer="{{candidate.name}}">\n      </div>\n      <div ng-if="candidateIndex === 1">\n        one\n      </div>\n      <div ng-if="candidateIndex === 2">\n        two\n      </div>\n    </div> --> <!--   </div>\n</div> --> <!--             <div class="dropdown">\n              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\n                State\n                <span class="caret"></span>\n              </button>\n              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">\n                <li><a href="">VIC</a></li>\n                <li><a href="">QLD</a></li>\n                <li><a href="">NSW</a></li>\n                <li><a href="">TAS</a></li>\n                <li><a href="">WA</a></li>\n                <li><a href="">ACT</a></li>\n              </ul>\n            </div> --> <!-- <h4>{{errorMsg}}</h4>\n<h4>{{successMsg}}</h4> -->'),a.put("views/new.html",'<form> <div class="form-group"> <input type="text" ng-model="candidate.name" class="form-control" placeholder="name"><br> <input type="radio" class="" ng-model="candidate.available"> Currently Employed<br> <input type="email" ng-model="candidate.email" class="form-control" placeholder="email"><br> <input type="text" ng-model="candidate.street" class="form-control" placeholder="street"><br> <input type="text" ng-model="candidate.state" class="form-control" placeholder="state"><br> <input type="text" ng-model="candidate.desired" class="form-control" placeholder="desired salary"><br> <input type="text" ng-model="candidate.current" class="form-control" placeholder="current salary"><br> <button ng-click="save()" class="btn-primary btn-sm">Save</button> </div> </form>')}]);