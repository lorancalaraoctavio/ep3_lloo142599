angular.module("peliculas", ['ngResource'])

.factory("Post",function($resource){
	return $resource("https://api.themoviedb.org/3/discover/movie?api_key=f5c3f33c99ca3274792a24e3e8949d76",{},{
			query:{method: "GET", isArray:false}
	});
})

.controller("FirstController",function($scope,Post){
	Post.query(function(data){
		$scope.movies = data.results;

		console.log($scope.movies);/*
var arreglo= $scope.movies;
let titulo;
let div;
let content=document.querySelector("#conten");
let textos=document.querySelector("#textos");
let salto= document.createElement('br');
let h1= document.createElement('h1');
let rutaimg;
var imagen ;



for (var i = 0; i < $scope.movies.length; i++) {
 h1.innerHTML = ""+arreglo[i].original_title;
 rutaimg=""+arreglo[i].poster_path;
 let pelis= document.createElement('div');
let contentimg=document.createElement('div');
let cardcontent=document.createElement('div');
let cardreveal=document.createElement('div');
let span= document.createElement('h2');
span.style.color="white";

let desc= document.createElement('p');
desc.style.color="white";
span.class="card-title activator grey-text text-darken-4";
let nombrepel= arreglo[i].original_title;

desc.innerHTML= arreglo[i].overview;
span.innerHTML=nombrepel;
 pelis.class="card";
 contentimg.class="card-image waves-effect waves-block waves-light";
cardcontent.class="card-content";
cardreveal.class="card-reveal";
cardcontent.style.background="#263248";
 div= document.querySelector('#titulos');
 salto= document.createElement('br');
 imagen = document.createElement("img");
 	imagen.setAttribute("src", "https://image.tmdb.org/t/p/w500"+rutaimg);
	imagen.setAttribute("class", "activator");
contentimg.appendChild(imagen);
pelis.appendChild(contentimg);
content.appendChild(pelis);
cardcontent.appendChild(span);
cardcontent.appendChild(desc);
content.appendChild(cardcontent);

	div.appendChild(salto);
*/




	});

});
