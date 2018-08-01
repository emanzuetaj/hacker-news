import angular from 'angular';
import articleComponent from './article.component';

const articleModule = angular.module('article', [])
  .component('article', articleComponent);
export default articleModule;