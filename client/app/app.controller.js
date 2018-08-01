class AppController {
  constructor($mdSidenav, $http) {
    'ngInject';
    this._$mdSidenav = $mdSidenav;
    this._$http = $http;
    this.currentPage = 'Front Page';
  }
  toggleSidenav() {
    this._$mdSidenav('left').toggle();
  };
  isWaiting(){
    return this._$http.pendingRequests.length > 0;
  }
  
}
export default AppController;
 