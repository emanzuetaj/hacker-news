class storylineController {
    constructor($state) {
      "ngInject";
      this._$state = $state;
    }
    goToArticle() {
      this._$state.go('story', {storyId: this.id});
    }
  }

  export default storylineController;