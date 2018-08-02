import angular from 'angular';
import commentComponent from './comment.component';

const commentModule = angular.module('comment', [])
  .component('comment', commentComponent);
export default commentModule;