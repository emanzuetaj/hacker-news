export default class StoriesService {
    constructor($q, $http) {
      'ngInject';
      this._$http = $http;
      this._$q = $q;
    }
  }