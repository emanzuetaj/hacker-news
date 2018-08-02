class storyController {
    constructor($scope, $stateParams, StoriesService) {
      "ngInject";
      this._$scope = $scope;
      this._$scope.$parent.$parent.$ctrl.currentPage = 'Comments';
      this._$stateParams = $stateParams;
      this.StoriesService = StoriesService;
      this.doneLoading = false;
    }
    $onInit() {
      this.storyId = this._$stateParams.storyId;
      this.getStory();
    }
    getStory() {
      this.StoriesService.getStory(this.storyId).then(
        (response) => {
          this.story = response;
          this.doneLoading = true;
        },
        (err) => {
          console.log(response);
        }
      );
    }
  }

  export default storyController;