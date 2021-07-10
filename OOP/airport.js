"use strict";
/*
Airport

In your IDE of choice, create a new JavaScript file named airport.js and make it so that all code written in the file follows JS strict mode.

Create an anonymous immediately-invoking function that will hold the main execution of all program calls.
 Writing a simple command console.log(“Hi”) inside this function and running the code should output “Hi“ 
 in the console.

/*Create two instances of the Flight object using the createFlight function and the following data:
relation: "Belgrade - New York" 		date: "Oct 25 2017"
relation: "Barcelona - Belgrade" 		date: "Nov 11 2017"

Create four instances of the Passenger object using the createPassenger function with the following data: 
Name: "John" 	surname: "Snow" 		seat number: 1		category: "b"
Name: "Cersei" 	surname: "Lannister" 	seat number: 2		category: "b"
Name: "Daenerys" 	surname: "Targaryen" 	seat number: 14	
Name: "Tyrion" 	surname: "Lannister" 	

Add the first two passengers to the first flight and the second two to the second flight using the Flight’s addPassenger method.

Add the created flight instances to the airport using Airport’s addFlight method.

Call Airport’s getData method to display the airport data output in the following manner:

Airport: Nikola Tesla, total passengers: 4
	25.10.2017, Belgrade - Paris
		1, B, John Snow
		2, E, Cersei Lannister
	11.11.2017, Barcelona - Belgrade
		3, E, Daenerys Targaryen
		4, E, Tyrion Lannister



Hints
List is a synonym for array, so when we say a list of flights, it’s actually an array of flight objects   
Use JS built-in Date()object to parse input date
Use \t and \n special strings to format output 
Use built-in String methods to transform text from lowercase to uppercase
Use Array’s built-in methods to add and remove elements from an array
*/
(function () {
console.log("Hi");
/*
Create constructor functions with properties representing the following:
Person - name, surname
Seat - number, category (can be "b" for business or "e" for economy)
Passenger - person (instance of Person), seat (instance of Seat)
Flight - relation, date and list of passengers (initially empty)
Airport - name (should be a hard-coded value "Nikola Tesla"), list of flights*/
function Person (name,surname) {
    if (!name || !surname) {
        throw new Error ('Name and surname are required')
    }
    this.name = name;
    this.surname = surname;
    //Add getData method to Person. It should return a formatted string containing the name and surname of the person.
//"John", "Snow" -> "John Snow”
    this.getData = function (){
        return this.name + ' ' + this.surname
    }
}
function Seat(number, category) {
    category = category || 'e'; //If category is not provided for Seat, assume it’s economy (“e”). 
    number = number || Math.floor(91 * Math.random() + 10) // mnozi se sa max - min  + 1 i dodaje se min 
    //If seat number is not provided, assign a random number between 10 and 100. 
    if (!['e','b'].includes(category)){
        throw new Error ('Invalid category input')
    }
    this.number = number;
    this.category = category;
    //Add getData method to Seat. It should return a formatted string containing a seat number and category.
    // 12, "B" -> "12, B”
    this.getData = function (){
        return this.number + ' ' + this.category.toUpperCase();
    }
}
function Passenger (person, seat) {
    if (!person || !(person instanceof Person)) {
        throw new Error ('Invalid category input')
    }
    if (!seat || !(seat instanceof Seat)) {
        throw new Error ('Invalid seat input')
    }
    //Add getData method to Passenger. It should return a formatted string containing 
    //a seat number, category letter (always in uppercase), a name and surname. 
    //To display seat data, use getData method of the Seat object. The same goes for the person data.
    //personObj, seatObj -> 12, B, John Snow
        this.person = person;
    this.seat = seat;
    this.getData = function () {
        return this.seat.getData() + ',' + this.person.getData()
    }
}

function Flight (relation, date){
    if (!relation || !date) {
        throw new Error ('Invalid relation or date input')
    }
    //Add addPassenger method to Flight. It should receive Passenger and add the passenger to the passenger list
    // of a given flight. 
    this.relation = relation;
    this.date = new Date(date);
    this.listOfPassengers = [];
    this.addPassenger = function (passenger) {
        if (!passenger || !(passenger instanceof Passenger)) {
            throw new Error ('INvalid passenger data')
        }
    this.listOfPassengers.push(passenger);
    }
    /*Add getData method to Flight. It should return a formatted string containing a date, relation, all data related to the flight and list of passengers with their data.
25.10.2017, Belgrade - Paris
		1, B, John Snow
		2, E, Cersei Lannister*/
    this.getData = function () {
        var year = this.date.getFullYear();
        var month = this.date.getMonth();
        var day = this.date.getDate();
        var result = '\t' + day + '.' + month + '.' + year + ',' + this.relation + '\n';
        this.listOfPassengers.forEach(function(passenger) {
            result = '\t\t' + passenger.getData() + '\n';
       })
       return result;
    }
}

function Airport () {
    this.name = 'Nikola Tesla'
    this.listOfFlights = [];
    //Add addFlight method to Airport. It should add the flight to the list of flights of the airport.
    //In you main program function, create an instance of the Airport object. 
    this.addFlight = function (flight) {
        if (!flight || !(flight instanceof Flight)) {
            throw new Error ('Invalid flight data')
        }
        this.listOfPassengers.addFlight();
    }
    this.getPassengersNumber = function () {
        var count = 0;
        this.listOfFlights.forEach(function(flight){
            count += flight.listOfPassengers.length;
        })
    }
    this.getData = function () {
        var result = 'Airport: ' + this.name + ', total passenegers' + this.getPassengersNumber() + '\n';
        this.listOfFlights.forEach(function(flight){
            result += flight.getData(); 
        })
    }

}
/*
Inside your immediately-invoking function, add createFlight function that receives a relation 
(ex. Belgrade - New York) and date as parameters and returns a created Flight.*/
function createFlight(relation, date) {
    return new Flight(relation, date)
}
/* Inside your immediately-invoking function, add createPassenger function that receives a first name, 
last name, seat number and category and returns a created Passenger.*/
function cratePassenger (firstName, lastName, seatNumber, category) {
    var person = new Person (firstName, lastName)
    var seat = new Seat (seatNumber, category)
    return new Passenger(person, seat)
}


//testing


var nikolaTesla = new Airport ();
console.log(nikolaTesla)

var dario =new Person ('Dario','Stamenkovic')
console.log(dario.getData())
console.log(dario.getData())

var seat = new Seat ()
var seat1 = new Seat (67, 'e')
console.log(seat)
console.log(seat1)
var passenger = new Passenger (dario, seat);
var passenger1 = new Passenger (dario, seat);
var passenger2 = new Passenger (dario, seat);
console.log(passenger1);
console.log(passenger.getData());
var belgradeParis = new Flight ("Belgrade - Paris", "Oct 25 2017")
console.log(belgradeParis);
belgradeParis.addPassenger(passenger1);
belgradeParis.addPassenger(passenger2);
console.log(belgradeParis.getData());
nikolaTesla.addFlight(belgradeParis);
console.log(belgradeParis.getData())
})();




