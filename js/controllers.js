app.controller('GlobalController', function($scope, $location) {
})

app.controller('HomeController', function($scope, $location, $http) {
  $scope.message = 'hi';
  // $scope.title = "Movie Search App";
  // $scope.submitMovieTitle = function(query){
  //   $scope.search = query;
  //   var path = 'http://www.omdbapi.com/?s=' + String(query.title);
  //   $http.get(path).then(function(data){
  //     if(data.data.Error){
  //       $scope.error = "0 search results"
  //     }
  //     $scope.omdbData = data;
  //   })
  // } 
})

