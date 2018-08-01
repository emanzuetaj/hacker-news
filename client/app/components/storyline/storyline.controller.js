class storylineController {
    constructor($state) {
      "ngInject";
      this._$state = $state;
    }
    goToArticle() {
      this._$state.go('article', {articleId: this.id});
    }
  }

  export default storylineController;