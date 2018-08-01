import angular from 'angular';
import paginationComponent from './pagination.component';

const paginationModule = angular.module('pagination', [])
  .component('pagination', paginationComponent);
export default paginationModule;