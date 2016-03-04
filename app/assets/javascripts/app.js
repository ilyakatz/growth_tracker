// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// require jquery
// require jquery_ujs
// require turbolinks
// require_tree .


//= require angular.min
var app = angular.module('growth_tracker', []);

app.controller('MainCtrl', function ($scope, $http) {
  var query_story = "/stories.json";
  $scope.tag = "";

  $http.get(query_story).then(
    function (success) {
      console.log(success);
      $scope.stories = success.data;
    },
    function (error) {
      console.log(error);
    }
  );

  var query_goal = "/goals.json";
  $scope.tag = "";

  $http.get(query_goal).then(
    function (success) {
      console.log(success);
      $scope.goals = success.data;
    },
    function (error) {
      console.log(error);
    }
  );
});