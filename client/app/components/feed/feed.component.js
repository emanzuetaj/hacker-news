import template from './feed.component.html';
import controller from './feed.controller.js';
import './feed.component.scss';

let feedComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};
export default feedComponent;