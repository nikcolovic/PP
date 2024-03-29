"use strict";
/*Festival

In your IDE of choice, create a new JavaScript file named festival.js 
žand make it so that all code written in the file follows strict mode.

Create an anonymous immediately-invoking function that will hold the main execution
 of all program calls. Writing a simple command console.log(“Hi”) 
inside this function and running code should output “Hi“ in the console.*/
(function (){
	console.log('Hi') 
})()


/*
Create constructor functions with properties representing the following:
Genre - name
Movie - title, genre (instance of Genre), length
Program - date, list of movies (initially empty) and total number of movies 
Festival - name, list of programs (initially empty), and number of movies in all programs*/
function Genre(name){
	this.name = name;	
	this.getData = function(){
		var firstLetter = this.name.charAt(0);
		var lastLetter = this.name.charAt(name.length-1);
		var result = firstLetter + lastLetter;
		return result.toUpperCase();
	}
}
var movie1 = new Genre('Action');
//console.log(movie1.getData());

function Movie(title, genre, length) {
	if (!title || !genre || !(genre instanceof Genre) || !length){
		throw new Error ('Invalid input')
	}
		this.title = title;
	this.genre = genre;
	this.mlength = length;
	this.getDataMovie = function(){
		return this.title + "," + this.mlength + "min," + this.genre.getData();
	};
}
var movie2 = new Movie('The Shawshank Redemption', movie1 , 130);
var movie3 = new Movie('film', movie1, 100 )
//console.log(movie2.getDataMovie());

/*
Add getData method to Program. It should return a formatted string of 
all data related to the program. The string should contain date, 
program length (calculated from length of all movies in a list) and 
data about movies in a list (see the example below). 
To display movie data, use Movie’s getData method.

Date, program length from all movies
     First movie title, length and genre
     Second movie title, length and genre
     Third movie title, length and genre
     Fourth movie name and length and genre*/

function Program (date) {
	this.date = new Date; 
	this.listOfMovies = [];
	this.numberOfMovies = 0;
	this.addMovie = function(movie2){
		return this.listOfMovies.push(movie2)
	}
	this.getTotalLength = function () {
		var totalLength = 0;
		this.listOfMovies.forEach(function(movie){
			totalLength += movie.mlength;
		})
		return totalLength;
	} 
		this.getData = function () {
				return this.date + ',' + this.getTotalLength() + '\n';
			}
		this.listOfMovies.forEach(function(movie){ 
			return result += '\t' + movie.getDataMovie + '\n'		
		})
	
}
var program1 = new Program ('May 29 2021')
console.log(program1.addMovie(movie2))
console.log(program1.listOfMovies)
console.log(program1.addMovie(movie3))
console.log(program1.listOfMovies)
console.log(program1)
console.log(program1.getData())


function Festival (nameOfFestival) {
	
	this.nameOfFestival = nameOfFestival;
	this.listOfPrograms = [];
	this.totalNumebrOfMovies = 0;
	this.AddProgram = function (program){
		return this.listOfPrograms.push(program)
	}

}
var festival1 = new Festival ('FEST')
console.log(festival1.AddProgram(festival1))
console.log(festival1)





/*
Add method getData to Genre which returns formatted string as first and last letter of genre name
"Action" -> AN
"Drama" -> DA
"Comedy" -> CY

Add getData method to Movie. It should return a formatted string consisting of the movie title, 
length and genre acronym.
The Shawshank Redemption, 130min, AN

Add addMovie method to Program. It should receive a Movie and add the 
movie to the movie list of a given program. 

Add addProgram method to Festival. It should receive a Program and add the program 
to the list of the given festival’s programs. 

Add getData method to Program. It should return a formatted string of 
all data related to the program. The string should contain date, 
program length (calculated from length of all movies in a list) and 
data about movies in a list (see the example below). 
To display movie data, use Movie’s getData method.

Date, program length from all movies
     First movie title, length and genre
     Second movie title, length and genre
     Third movie title, length and genre
     Fourth movie name and length and genre


Add method getData to Festival 

which return formatted string like festival name, number of movies in all programs and all programs listed. Use Programs getData method to list all programs. (example output is shown below)

Weekend festival has 4 movie titles
	28.10.2017, program duration 368min
		Spider-Man: Homecoming, 133min, AN
		War for the Planet of the Apes, 140min, DA
		The Dark Tower, 95min, WN
	29.10.2017, program duration 108min
		Deadpool, 108min, CY

Inside your immediately-invoking function, 
add createMovie function that receives a 
movie title, movie length and genre (as a string) as parameters and returns a created Movie.

Inside your immediately-invoking function, 
add createProgram function that receives 
a date and returns a created Program.

Start creating your movie festival.

In your main program function, 
create an instance of the Festival object. 

Create two instances of Program 
using createProgram function.

Create four instances of Movie 
object using createMovie function. 
Add all created movies to both programs using the addMovie method.

Add the created program instances 
to the created festival instance 
using festival’s addProgram method.

Display festival’s data using getData method.

Hints
List is a synonym for array, so when we say a list of movies, it’s actually an array of movie objects
Use JS built-in Date()object to create Date object
Use \t and \n special strings to format output 
Use built-in String methods to transform text from lowercase to uppercase
Use Array’s built-in methods to add and remove elements from an array
*/