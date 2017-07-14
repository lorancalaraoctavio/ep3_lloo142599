angular.module("peliculas", ['ngResource'])

.factory("Post",function($resource){
  return $resource("http://api.themoviedb.org/3/discover/movie?api_key=0d043e6f7bc2101edbeabfe13b4204a2",{},{
    query:{method: "GET",isArray:false}
  });
})



.controller("FirstController",function($scope,Post){
  /*$scope.arreglo=[];
  $scope.ver = function(){
    console.log($scope.nombre);
    $scope.arreglo.push({post:$scope.nombre});
    document.getElementsByName('nombre').value="";
  }
  */
  $scope.comment = function(){
    console.log($scope.com);
  }
  Post.query(function(data){
    $scope.movies = data.results;
    console.log($scope.movies);
  });

});
