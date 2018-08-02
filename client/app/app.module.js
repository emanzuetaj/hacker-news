import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import Stories from './services/stories/stories';
import 'angular-material/angular-material.css';
import 'normalize.css';
import '../favicon.ico';

angular.module('app', [
  uiRouter,
  ComponentsModule.name,
  Stories,
  ngMaterial,
  ngSanitize
])
.config(($urlRouterProvider) => {
  'ngInject';
  $urlRouterProvider.otherwise("/");
})
.config(($mdThemingProvider) => {
	'ngInject';
  $mdThemingProvider.theme('default').primaryPalette('deep-orange').accentPalette('grey');
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