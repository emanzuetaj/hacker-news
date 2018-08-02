import angular from 'angular';
import storyComponent from './story.component';

const storyModule = angular.module('story', [])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('story', {
        url: '/story/:storyId',
        component: 'story',
        params: {storyId: null}
      });
  })
  .component('story', storyComponent);
export default storyModule;