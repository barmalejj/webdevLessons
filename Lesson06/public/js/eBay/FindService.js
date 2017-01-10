angular.module('app.ebay').factory('FindService', FindService)

function FindService($http, $sce) {
  return {
    findByKeywords: findByKeywords
  }

  function findByKeywords(keywords) {
    return (
      $http.post('/search', keywords)
    )

  }
}
