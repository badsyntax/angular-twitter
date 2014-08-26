'use strict';

angular.module('app', [
  'ngRoute',
  'app.filters',
  'app.services',
  'app.directives',
  'app.controllers'
])
.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/sign-in', {
      templateUrl: 'partials/sign-in.html',
      controller: 'SignIn'
    });

  $routeProvider
    .when('/stream/:username', {
      templateUrl: 'partials/stream.html',
      controller: 'Stream'
    });

  $routeProvider.otherwise({
    redirectTo: '/sign-in'
  });
}]);
