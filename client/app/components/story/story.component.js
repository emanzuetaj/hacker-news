import template from './story.component.html';
import controller from './story.controller';
import './story.component.scss';

let storyComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};
export default storyComponent;