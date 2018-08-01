import angular from 'angular';
import storylineComponent from './storyline.component';

const storylineModule = angular.module('storyline', [])
  .component('storyline', storylineComponent);
export default storylineModule;