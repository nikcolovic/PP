/*1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”.*/

var a = 6
switch (a) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
}

/*2. Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.*/

var a = 10
switch (a) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Input must be a number between 1 and 7")
        break;
}

/*3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.*/

var a = 6
switch (a) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("It’s weekday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("It’s weekend")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Input must be a number between 1 and 7")
        break;
}



/*4. Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.*/

var a = 13
switch (a) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;
    default:
        console.log("Input must be a number between 1 and 12")
        break;
}


/*5. Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12.*/
var a = 8
switch (a) {
    case 1:
        console.log("winter")
        break;
    case 2:
        console.log("winter")
        break;
    case 3:
        console.log("spring")
        break;
    case 4:
        console.log("spring")
        break;
    case 5:
        console.log("spring")
        break;
    case 6:
        console.log("summer")
        break;
    case 7:
        console.log("summer")
        break;
    case 8:
        console.log("summer")
        break;
    case 9:
        console.log("autumn")
        break;
    case 10:
        console.log("autumn")
        break;
    case 11:
        console.log("autumn")
        break;
    case 12:
        console.log("winter")
        break;
    default:
        console.log("Input must be a number between 1 and 12")
        break;
}


/*6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - Good job, B - Pretty good, C -
Passed;, D - Not so good;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;.*/

var a = 'B'
switch (a) {
    case 'A':
        console.log("Good job")
        break;
    case 'B':
        console.log("Pretty good")
        break;
    case 'C':
        console.log("Passed")
        break;
    case 'D':
        console.log("Not so good")
        break;
    case 'F':
        console.log("Failed")
        break;
    default:
        console.log("Input must be letter A and F")
        break;
}

/*7. Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city;.*/
var a = 'Belgrade'
switch (a) {
    case 'Corfu':
        console.log("Greece")
        break;
    case 'Sivota':
        console.log("Greece")
        break;
    case 'Parga':
        console.log("Greece")
        break;
    case 'Lefkas':
        console.log("Greece")
        break;
    case 'Argostoli':
        console.log("Greece")
        break;
    case 'Prague':
        console.log("Czech republic")
        break;
    case 'Karlove Vary':
        console.log("Czech republic")
        break;
    case 'Plsen':
        console.log("Czech republic")
        break;
    case 'Brno':
        console.log("Czech republic")
        break;
    case 'Venice' :
        console.log("Italy")
        break;
    case 'Verona':
        console.log("Italy")
        break;
    case 'Padova':
        console.log("Italy")
        break;
    case 'Paris':
        console.log("France")
        break;
    case 'Strasbourg':
        console.log("France")
        break;
    case 'London':
        console.log("Great Britain")
        break;
    default:
        console.log("Please choose a different city")
        break;
}

/*8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero! */

/*var a = 'Belgrade'
var b = 10
var c = 10
switch (a) {
    case 10:
        console.log(a+b+c)
        break;
    case 'Belgrade':
        console.log(a-b-c)
        break;
    case 'C':
        console.log(a*b*c)
        break;
    case 'D':
        console.log(a/b/c)
        break;
    default:
        console.log("I really don't have any idea about this task No.8")
        break;
    
}*/

var a = 22;
var b = 0;

var operation = '*'

switch (operation) {
    case '+':
        console.log (a+b)
        break;
    case '-':
        console.log (a-b)
        break;
    case '*':
        console.log (a*b)
        break;
    case '/':
        if (b===0) {
        console.log('b cannot be zero') }
     else  {console.log (a/b) }
        break;
    default:
        break;
}