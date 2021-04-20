
// 1. Calculate the sum of angles in Polygone trinangle, square, and six... with formula (n-2) * 180 degree 

function sumPolygon(n) {
    var k = (n-2) * 180;
    sum = 0;
    for (i = 0; i < n; i++){
        sum += sum[k]
    } 
    return k
}
console.log(sumPolygon(3))
console.log(sumPolygon(4))
console.log(sumPolygon(6))

// 2. Create a function that takes voltage and current and returns the calculated power.


function circuitPower(voltage, current) {
    var Power = voltage * current;
    return Power;	
}
var voltage = 230;
var current = 10;
console.log(circuitPower(voltage,current))

//3. Write a function that converts hours into seconds.

function howManySeconds (hours) {
    var seconds = (hours * 60) * 60; 
    return seconds
} 
console.log(howManySeconds(2))
console.log(howManySeconds(10))
console.log(howManySeconds(24))

// 4. Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
    var seconds = minutes * 60; 
    return seconds
}

console.log(convert(5))
console.log(convert(3))
console.log(convert(2))

// 5. Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
    var triangle = base * height / 2
    return triangle
}
console.log(triArea(3,2))
console.log(triArea(7,4))
console.log(triArea(10,10))

/* 6. There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
Two numbers are passed as parameters. 
The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.*/

function remainder(x, y) {
    var z = x/y
    if (z == 1){
        return 0
    } else {
        return x;
    }
}

console.log(remainder(1, 3))
console.log(remainder(3, 4))
console.log(remainder(-9, 45))
console.log(remainder(5, 5))

// 7. Create a function that takes length and width and finds the perimeter of a rectangle.

function findPerimeter(length, width) {
	var p = 2 * length + 2 * width
    return p
}

console.log(findPerimeter(6, 7))
console.log(findPerimeter(20, 10))
console.log(findPerimeter(2, 9))

/* 8. This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function
that looks like this:
function hello() {

}
All you have to do is type return "hello edabit.com" between the curly braces { } and then click the Check button. 
If you did this correctly, the button will turn red and say SUBMIT FINAL. Click it and see what happens.
Notes
The returned string must be in all lowercase letters.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab. */

function hello() {
    return "hello edabit.com"
}

/* 9. Is the Number Less than or Equal to Zero?
Create a function that takes a number as its only argument and returns true 
if it's less than or equal to zero, otherwise return false. */

function lessThanOrEqualToZero(num) {
        if(num <= 0){
            return true;
        } else{
            return false;
        }
}
var num = 9
console.log(lessThanOrEqualToZero(num))

/*10. Return the Next Number from the Integer Passed
Create a function that takes a number as an argument, increments the number by +1 and returns the result.*/
var a = 7
function addition(num) {
    var a = num + 1;
    return a
}
console.log(addition(a))

/* 11. Return the First Element in an Array
Create a function that takes an array containing only numbers and return the first element.
Examples
getFirstValue([1, 2, 3]) ➞ 1, getFirstValue([80, 5, 100]) ➞ 80, getFirstValue([-500, 0, 50]) ➞ -500 */
var arr = [80,5,100];
function getFirstValue(arr) {
	i = arr[0]
    return i
}
console.log(getFirstValue(arr))

/* 12. Correct the Mistakes
Fix the code in the code tab to pass this challenge (only syntax errors). 
Look at the examples below to get an idea of what the function should do.
Examples squared(5) ➞ 25, squared(9) ➞ 81, squared(100) ➞ 10000
Notes
READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER! Don't overthink this challenge; it's not supposed to be hard.
function squaed(b) {
	return a * a
}
*/

function squared(a) {
	return a * a
}

console.log(squared(5))
console.log(squared(9))
console.log(squared(100))

/* 13. Buggy Code (Part 5)
Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. 
Look at the examples below to get an idea of what the function should do.

Examples printArray(1) ➞ [1], printArray(3) ➞ [1, 2, 3], printArray(6) ➞ [1, 2, 3, 4, 5, 6] */

function printArray(number) {
    var newArray = [];
  
    for(var i = 1; i <= number; i++) {
      newArray.push(i);
    }
  
    return newArray;
  }

  console.log(printArray(1))
  console.log(printArray(3))
  console.log(printArray(6))

  /* 14. Basketball Points - You are counting points for a basketball game, 
  given the amount of 2-pointers scored and 3-pointers scored, 
  find the final points for the team and return that value.
Examples: points(1, 1) ➞ 5  ; points(7, 5) ➞ 29; points(38, 8) ➞ 100*/

function points(twoPointers, threePointers) {
	var totalPoints = 2 * twoPointers + 3* threePointers
    return totalPoints
}
console.log(points(1,1))
console.log(points(7,5))
console.log(points(38,8))
/* 15. Buggy Code (Part 1)
Fix the code in the code tab to pass this challenge (only syntax errors). 
Look at the examples below to get an idea of what the function should do.
function cubes(a) {
	retunr a ** 3
} */
var a = 3;
function cubes(a) {
	return a ** 3
}
console.log(cubes(a))

/*16. Buggy Code (Part 7)
Mubashir wants to swap two given numbers! It is not returning the right values. Can you help him fix it?

a = 100
b = 200
a, b = swap(a, b)
print(a, b) // Should print out "200, 100", but the function prints out "100, 100"
Examples swap(100, 200) ➞ [200, 100], swap(44, 33) ➞ [33, 44], swap(21, 12) ➞ [12, 21]
*/

function swap(a, b) {
		return [b, a];
}
console.log(swap(100,200))
console.log(swap(44,33))
console.log(swap(21,12))

/* 17 Create a function that takes an array and returns the types of values (data types) in a new array.
Examples: 
arrayValuesTypes([1, 2, "null", []]) ➞ ["number", "number", "string", "object"]
arrayValuesTypes(["214", true, false, 2, 2.15, [], null]) ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]) ➞ ["number", "string", "string", "object", "object", "boolean", "number"] */

/*var arr = [1, 2, "null", []]

function arrayValuesTypes(arr) {
    var array = []
	for (i=0; i < arr.length; i++) {
        array[i] = typeof arr[i];
    }
    return array[i];
}
console.log(arrayValuesTypes())*/

/* 18 In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals.
 The farmer breeds three species:
chickens = 2 legs, cows = 4 legs, pigs = 4 legs.
The farmer has counted his animals and he gives you a subtotal for each species. 
You have to implement a function that returns the total number of legs of all the animals.
Examples: animals(2, 3, 5) ➞ 36, animals(1, 2, 3) ➞ 22, animals(5, 2, 8) ➞ 50
Notes
Don't forget to return the result. The order of animals passed is animals(chickens, cows, pigs).
Remember that the farmer wants to know the total number of legs and not the total number of animals.*/

function animals(chickens, cows, pigs) {
	totalNumOfLegs = chickens * 2 + cows * 4 + pigs * 4
    return totalNumOfLegs;
}
console.log(animals(2,3,5))
console.log(animals(1,2,3))
console.log(animals(5,2,8))

/* 19. Return Something to Me! Write a function that returns the string "something" 
joined with a space " " and the given argument a.
Examples: 
giveMeSomething("is better than nothing") ➞ "something is better than nothing"
giveMeSomething("Bob Jane") ➞ "something Bob Jane"
giveMeSomething("something") ➞ "something something"*/

function giveMeSomething(a) {
    sweetJane = "something" + " " + a 
    return sweetJane
}
console.log(giveMeSomething("is better than nothing"))
console.log(giveMeSomething("Bob Jane"))
console.log(giveMeSomething("something"))

/* 20. Football Points - Create a function that takes the number of wins, 
draws and losses and calculates the number of points a football team has obtained so far.
wins get 3 points, draws get 1 point, losses get 0 points
Examples
footballPoints(3, 4, 2) ➞ 13 ; footballPoints(5, 0, 2) ➞ 15; footballPoints(0, 0, 1) ➞ 0 */

function footballPoints(wins, draws, losses) {
    totalFootbalPoints = 3 * wins + 1 * draws
    return totalFootbalPoints
}
console.log(footballPoints(3,4,2))
console.log(footballPoints(5, 0, 2))
console.log(footballPoints(0, 0, 1))
