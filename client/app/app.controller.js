class AppController {
  constructor($mdSidenav, $http) {
    'ngInject';
    this._$mdSidenav = $mdSidenav;
    this._$http = $http;
    this.currentPage = 'Front Page';
    this.error = false;
  }
  isWaiting(){
    return this._$http.pendingRequests.length > 0;
  }
  refresh() {
    window.location.reload();
  }
}
export default AppController;
 