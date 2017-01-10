angular.module('app').controller('AppController', AppController)

function AppController(FindService) {
  var vm = this

  vm.keywords = ''
  vm.data = undefined
  vm.search = search
  vm.SelectedQuantity = 0

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

angular.module('app').controller('MyCtrl',MyCtrl)

function MyCtrl($scope){
  $scope.quantity = [5, 10, 25, 50];
}
