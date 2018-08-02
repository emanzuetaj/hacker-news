import template from './commentChild.component.html';
import controller from './commentChild.controller.js';
import './commentChild.component.scss';

let commentChildComponent = {
  restrict: 'E',
  bindings: {
    item: '<'
  },
  template,
  controller,
  controllerAs: '$ctrl'
};
export default commentChildComponent;