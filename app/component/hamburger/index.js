'use strict';

require('./hamburger.scss');

const angular = require('angular')
const demoApp =  angular.module('demoApp');

demoApp.component('appHamburger', {
  template: require('./hamburger.html'),
  controller: 'HamburgerController',
  controllerAs: 'hamburgerCtrl',
});

demoApp.controller('HamburgerController', ['$log', HamburgerController]);

function HamburgerController($log){
  $log.debug('init HamburgerController');
  this.showHamburger = true;
  this.wat = 'lul';

  this.toggleHam = function(){
    this.showHamburger = !this.showHamburger;
    $log.log('HamburgerController.toggleHamburger');
  }
}
