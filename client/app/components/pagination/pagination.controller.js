class paginationController {
    constructor($scope) {
      "ngInject";
      this._$scope = $scope;
    }
    goToNextPage(something) {
      this._$scope.$parent.$ctrl.currentPage++;
    }
    goToPreviousPage() {
      this._$scope.$parent.$ctrl.currentPage--;
    }
  }
  export default paginationController;