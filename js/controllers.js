app.controller("GlobalController", function($scope, $location, $http) {
  $http.get('http://g12-kevin-gary-memories.cfapps.io/api/v1/memories')
    .then(function(data){
      $scope.dataFromApi = data;
    });
  $scope.submitMemory = function(memory){
    console.log(memory)
    $http.post('http://g12-kevin-gary-memories.cfapps.io/api/v1/memories',
      {
        "data": {
          "type": "memory",
          "attributes": {
            "old_days": memory.old,
            "these_days": memory.new,
            "year": memory.year
          }
        }
      }

      )
      .then(function(){
        $http.get('http://g12-kevin-gary-memories.cfapps.io/api/v1/memories')
          .then(function(data){
            $scope.dataFromApi = data;
          }); 
      })
  }
});


