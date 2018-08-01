import angular from 'angular';
import StoriesService from './stories.service';
const StoriesModule = angular.module('Stories', [])
  .service('StoriesService', StoriesService)
  .name;

export default StoriesModule;