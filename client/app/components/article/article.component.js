import template from './article.component.html';
import controller from './article.controller.js';
import './article.component.scss';

let articleComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'articleController'
};
export default articleComponent;