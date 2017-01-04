angular.module('app').controller('AppController', AppController)

function AppController(FindService) {
  var vm = this

  vm.keywords = ''
  vm.data = undefined
  vm.search = search

  function search() {
    FindService.findByKeywords(vm.keywords)
      .then(data => {
        vm.data = data
      })
      .catch(e => console.log(e))
      .finally(() => console.log('search tirggered'))
  }
}
