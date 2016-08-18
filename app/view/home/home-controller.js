'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('HomeController', ['$log', HomeController]);

function HomeController($log){
  $log.debug('init HomeController');
}
