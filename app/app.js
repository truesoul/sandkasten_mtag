'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.mtController',
  'myApp.mtUppercase',
    'myApp.mtagRegexFilter',
    'myApp.mtagArrayFilter'
]);