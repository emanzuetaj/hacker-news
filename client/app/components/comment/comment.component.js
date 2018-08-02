import template from './comment.component.html';
import controller from './comment.controller.js';
import './comment.component.scss';

let commentComponent = {
  restrict: 'E',
  bindings: {
    item: '<'
  },
  template,
  controller,
  controllerAs: '$ctrl'
};
export default commentComponent;