var angular = require('angular');

angular.module('Home', [])
  .controller('homectrl', require('./home.controller.js'))
  .directive('homedir', require('./home.directive.js'));
