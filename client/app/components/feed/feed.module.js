import angular from 'angular';
import feedComponent from './feed.component';

const feedModule = angular.module('feed', [])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('feed', {
        url: '/',
        component: 'feed'
      });
  })
  .component('feed', feedComponent);
export default feedModule;