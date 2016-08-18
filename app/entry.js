'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');
const ngAnimate = require('angular-animate');

// angular modules
angular.module('demoApp', [ngRoute, ngAnimate])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    template: require('./view/home/home.html'),
    controller: 'HomeController',
    controllerAs: 'homeCtrl',
  })
  .when('/home', {
    redirectTo: '/',
  })
  .when('/about', {
    template: require('./view/about/about.html'),
    controller: 'AboutController',
    controllerAs: 'aboutCtrl',
  })
  .otherwise({
    redirectTo: '/',
  });
}]);

// angular services
// angular controllers
require('./view/home/home-controller.js');
require('./view/about');
// angular components
require('./component/nav');
require('./component/hamburger');
// angular directives
