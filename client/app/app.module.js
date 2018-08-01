import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import ngMaterial from 'angular-material';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import 'angular-material/angular-material.css';
import 'normalize.css';
import '../favicon.ico';

angular.module('app', [
  'ui.router',
  ComponentsModule.name,
  ngMaterial
])
.config(($urlRouterProvider) => {
  'ngInject';
  $urlRouterProvider.otherwise("/");
})
.config(($mdThemingProvider) => {
	'ngInject';
  $mdThemingProvider.theme('default').primaryPalette('deep-orange');
  // Enable browser color
  $mdThemingProvider.enableBrowserColor({
    palette: 'primary'
  });
})
.run(($transitions, $rootScope) => {
  "ngInject";
  $transitions.onStart({}, () => {
    $rootScope.isWaiting = true;
  });

  $transitions.onFinish({}, () => {
    $rootScope.isWaiting = false;
  });
})
.component('app', appComponent);