"use strict";

function Person (name,surname) {
    class Person {
        constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        }
        getData(){
            return `${this.name} ${this.surname}`
        }
    }
}

class Seat {
    constructor(number, category) {
        number = number || Math.floor(Math.floor() * (100 -10) + 10);
        category = category || "e";
        this.number = number;
        this.category = category.toUpperCase();
    }
    getData() {
        return `${this.number} ${this.category}`
    }
}

class Passenger extends Person {
    constructor(name, surname, seat)
 {
     super(name, surname);

 }
}

changeSeatCategoryoutput(); {
    if(this.seat.category === "8") {
        return this.seat.category = "business"
    }
    else {
        return rhis.seat.category = "economy"
    }
}
getData();{
    return `{this.seat.number}, ${this.changeSeatCategoryoutput()}, ${this.Person.getData}`
}

class Flight{
    constructor (relation, date) {
        this.relation = relation;
        const inputDate = new Date(date);
        this.date = `${inputDate.getData()+1}. ${inputDate.getData()}. ${inputDate.getUTCFullYear()}`
        this.listOfPassingers = [];
    }
    addPassenger(passenger) {
        try {
            for(let i=0; i<this.listOfPassingers.length; i++) {
                if(this.listOfPassingers[i].seat.number === passenger.seat.number){
                    throw `${passenger.person.name}'s seat is already taken.`;
                }
            }
        }
        catch (err) {
            console.log(err);
            this.listOfPassingers[i] = passenger; 
        }
        try {
            this.listOfPassingers.push(passenger);
            if(this.listOfPassingers.length>100)
            throw "There are no available place. Try with our next flight"
        }
        catch(err) {
            console.log(err);
            this.listOfPassingers.pop();
        }
    }
    totalInBussines() {
        let counter = 0;
        this.listOfPassingers.forEach(function(passenger){
            if(passenger.seat.category === "business"){
                counter++; 
            }
        })
        return counter;
    }
    getData() {
        let output = "";
        let passOutput = "";
        this.listOfPassingers.forEach(function(passenger){
            passOutput += `${passenger.getData()}`;
        })
        output+= `${this.date}, ${this.relation}. In business category: ${this.totalInBussines}`
        return output + passOutput;
    }
}
class Airport{
    constructor (name){
    this.name = name;
    this.listOfFlights=[];
    }
}
getData();{
    let output = "";
    let flightOutput = "";
    let totalNumberOfPassengers = 0;
    let totalNumberOfPassengersInBusiness = 0;
    this.listOfFlights.forEach (function (flight){
        totalNumberOfPassengers += flight.listOfPassingers.length;
        totalNumberOfPassengersInBusiness += flight.totalInBussines();
    })
    this.listOfFlights.forEach(function(flight){
        flightOutput += `${flight.getData()}`;
    })
    output = `Airport: ${this.name}, total number of passengers: ${totalNumberOfPassengers}, Total in business: ${totalNumberOfPassengersInBusiness}`;
    return output + flightOutput;
}

