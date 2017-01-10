angular.module('app').controller('AppController', AppController)

function AppController(FindService) {
  var vm = this

  vm.keywords = ''
  vm.data = undefined
  vm.search = search
  vm.quantity = [5, 10, 25, 50];
  vm.selectedQuantity = vm.quantity[0];

  function search() {
    const {keywords} = vm
    console.log({keywords})
    FindService.findByKeywords({keywords})
      .then(data => {
        vm.data = data
      })
      .catch(e => console.log(e))
      .finally(() => console.log('search tirggered'))
  }
}
