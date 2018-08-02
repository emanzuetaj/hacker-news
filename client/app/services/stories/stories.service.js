export default class StoriesService {
    constructor($q, $http) {
      'ngInject';
      this._$http = $http;
      this._$q = $q;
      this.frontPageStories = 'https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=15&page=';
      this.story = 'https://hn.algolia.com/api/v1/items/';
    }
    getFrontPageStories(pageNumber) {
      const defer = this._$q.defer();
      this._$http.get(this.frontPageStories + pageNumber)
        .then((response) => {
          defer.resolve(response.data);
        })
        .catch((response) => {
          defer.reject(response.data);
        });
      return defer.promise;
    }
    getStory(storyId) {
      const defer = this._$q.defer();
      this._$http.get(this.story + storyId)
        .then((response) => {
          defer.resolve(response.data);
        })
        .catch((response) => {
          defer.reject(response.data);
        });
      return defer.promise;
    }
  }