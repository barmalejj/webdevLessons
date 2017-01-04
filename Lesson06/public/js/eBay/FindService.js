angular.module('app.ebay').factory('FindService', FindService)

function FindService($http, $sce) {
  return {
    findByKeywords: findByKeywords
  }

  function findByKeywords(keywords) {
    return $http.jsonp(
      $sce.trustAsResourceUrl(`http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=MikeDeni-FishRule-PRD-145f6444c-44029cba&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${keywords}`));
  }
}
