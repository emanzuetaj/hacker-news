class feedController {
    constructor(StoriesService) {
      "ngInject";
      this.StoriesService = StoriesService;
      this.stories = [];
      this.totalPages = 0;
      this.currentPage = 0;
      this.doneLoading = false;
    }
    $onInit() {
      // let's get first page of results
      this.currentPage = 1;
      this.getFrontPageStories();
    }
    getFrontPageStories() {
      this.StoriesService.getFrontPageStories(this.currentPage - 1).then(
        (response) => {
          this.stories = response.hits;
          this.totalPages = response.nbPages;
          this.addPointsToStory();
          this.doneLoading = true;
        },
        (err) => {
          console.log(response);
        }
      );
    }
    addPointsToStory() {
      for(let i = 0; i < this.stories.length; i++) {
        this.stories[i].points = [this.stories[i].points];
      }
    }
  }

  export default feedController;