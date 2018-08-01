import template from './pagination.component.html';
import controller from './pagination.controller.js';
import './pagination.component.scss';

let paginationComponent = {
  restrict: 'E',
  bindings: {
    current: '<',
    total: '<'
  },
  template,
  controller,
  controllerAs: '$ctrl'
};
export default paginationComponent;