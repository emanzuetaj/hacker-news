class storyController {
    constructor($scope) {
      "ngInject";
      this._$scope = $scope;
      this._$scope.$parent.$parent.$ctrl.currentPage = 'Comments';
    }
  }

  export default storyController;