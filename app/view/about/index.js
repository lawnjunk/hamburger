'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('AboutController', ['$log', AboutController]);

function AboutController($log){
  $log.debug('init AboutController');
}
