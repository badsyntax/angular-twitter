'use strict';

/* Services */

var appServices = angular.module('app.services', ['ngResource']).
  value('version', '0.1');

appServices.factory('TwitterApi', ['$resource', '$location', function($resource, $location) {
  return $resource('/timeline/:username/:count/:maxId', {
    username: '@username',
    count: '@count',
    maxId: '@maxId'
  }, {
    get: {
      method: 'GET'
    }
  });
}]);
