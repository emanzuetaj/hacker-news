export default class StoriesService {
    constructor($q, $http) {
      'ngInject';
      this._$http = $http;
      this._$q = $q;
      this.frontPageStories = 'http://hn.algolia.com/api/v1/search?tags=front_page&page=';
    }
    getFrontPageStories(pageNumber) {
      const defer = this._$q.defer();
      this._$http.get(this.frontPageStories + pageNumber)
        .then((response) => {
          defer.resolve(response.data);
        })
        .catch((response) => {
          defer.reject(response.data.detail);
        });
      return defer.promise;
    }
  }