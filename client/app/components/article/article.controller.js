class articleController {
    constructor($scope) {
      "ngInject";
      this._$scope = $scope;
      this._$scope.$parent.$parent.$ctrl.currentPage = 'Comments';
    }
  }

  export default articleController;