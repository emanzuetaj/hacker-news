import angular from 'angular';
import articleComponent from './article.component';

const articleModule = angular.module('article', [])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('article', {
        url: '/article/:articleId',
        component: 'article',
        params: {articleId: null}
      });
  })
  .component('article', articleComponent);
export default articleModule;