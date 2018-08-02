import angular from 'angular';
import commentChildComponent from './commentChild.component';

const commentChildModule = angular.module('commentChild', [])
  .component('commentChild', commentChildComponent);
export default commentChildModule;