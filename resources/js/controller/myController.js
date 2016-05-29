
// Alert
app.controller('AlertDemoCtrl', function($scope, $templateCache, $timeout, $alert){
  $scope.alert = { type: 'warning'};
})



// Typehead
app.controller('TypeaheadDemoCtrl', function($scope, $templateCache, $http){
  $scope.selectedState = '';
  $scope.states = ['Auckland', 'Blenheim', 'Christchurch', 'Dunedin', 'Gisborne', 'Hamilton', 'Hastings', 'Invercargill', 'Napier', 'Nelson', 'New Plymouth', 'Palmerston North', 'Queenstown', ' Tauranga', 'Wellington', 'Whangarei'];
  
  $scope.selectedAddress = '';
  $scope.getAddress = function(viewValue) {
    var params = {address: viewValue, sensor: false};
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
    .then(function(res) {
      return res.data.results;
    });
  };
});

var ListName = {
  bindings: {
    name: '=',
    age: '='
  },
  template: [
    '<p>Name: {{$ctrl.name}}</p>',
    '<p>Age: {{$ctrl.age}}</p>'
  ].join('')
};

function TestController() {
  this.people = [{
    name: 'Todd',
    age: 25
  },{
    name: 'Ryan',
    age: 20
  },{
    name: 'Jilles',
    age: 21
  }];
}

app.controller('TestController', TestController);
app.component('listName', ListName);


app.controller('demoModalCtrl', function($scope, $modal){

  var myFirstModal = $modal({
    container: "body",
    templateUrl: "components/modal-demo-01.tpl.html",
    show: false,
    controller: 'demoModalCtrl',
    controllerAs: 'demo'
  })

  var mySecondModal = $modal({
    container: "body",
    templateUrl: "components/modal-demo-02.tpl.html",
    show: false,
    controller: 'demoModalCtrl',
    controllerAs: 'demo'
  })

  $scope.$on('modal.show', function(e, $modal){
    console.log("haha");
  })
  
  $scope.showFirstModal = showFirstModal;
  $scope.showSecondModal = showSecondModal;



  function showFirstModal(){
    setTimeout(function(){
      myFirstModal.show();
    }, 500);
    
  }
  function showSecondModal(){
    setTimeout(function(){
      mySecondModal.show();
    }, 500);
  }
});