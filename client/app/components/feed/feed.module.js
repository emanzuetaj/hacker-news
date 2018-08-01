import angular from 'angular';
import feedComponent from './feed.component';

const feedModule = angular.module('feed', [])
  .component('feed', feedComponent);
export default feedModule;