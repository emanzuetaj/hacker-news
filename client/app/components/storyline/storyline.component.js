import template from './storyline.component.html';
import controller from './storyline.controller.js';
import './storyline.component.scss';

let storylineComponent = {
  restrict: 'E',
  bindings: {
    points: '<',
    author: '<',
    header: '<',
    id: '<'
  },
  template,
  controller,
  controllerAs: '$ctrl'
};
export default storylineComponent;