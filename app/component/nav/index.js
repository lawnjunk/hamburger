'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');


demoApp.component('appNav', { 
    template: require('./nav.html'),
});

//demoApp.controller('NavController', ['$location', '$log', '$animate',  NavController]);
