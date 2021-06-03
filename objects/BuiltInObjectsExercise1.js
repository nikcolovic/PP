/*Try to use built-in object methods to solve some of the problems here 

/*1.
Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]*/
//option1
function duplicateElements (arr) {
    var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
            newArr.push(arr[i]);
        }
    return newArr;
}
var duplicate = duplicateElements([2, 4, 7, 11, -2, 1])
console.log(duplicate);
//option2
var a = [2, 4, 7, 11, -2, 1]
var b = a.flatMap (x =>[x,x]);
console.log(b);
/*2.
Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]*/ 

function removeDuplicate (arr) {
    var unique = arr.reduce(function (a,b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
    },[]);
    return unique.sort(function(a,b){return a - b});
}
console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]))


/*3.a
Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true*/

function isOddLength (arr) {
        return arr.length % 2 !==0;
}
console.log(isOddLength([1, 2, 5, 9, 1]))

/*3.b
Write a function that counts the number of elements less than the middle element. 
If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4 */
//pih sto sam se ovde iznervirao
function lessThanMiddleElement (arr) {
  var a = arr[(arr.length/2)-0.5];
  newArr = [];  
  for (var i = 0; i < arr.length; i++){
    if(arr[i] < a) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr.length;
}
console.log(lessThanMiddleElement([-1, 8.1, 3, 6, 2.3, 44, 2.11]))
/* 4.
Write a function that finds the smallest element of a given array. 
The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 } */
//without builtIn
function findMinimum(arr) {
  var a = arr.length;
  var min = Infinity;
  while (a--) {
    if (arr[a] < min) {
      min = arr[a];
    }
  }
  return {minValue: min, minLastIndex: arr.lastIndexOf(min)}
}
console.log(findMinimum([1, 4, -2, 11, 8, 1, -2, 3]))
//with builtIn
function findMinimum(arr){
  return {minValue: Math.min.apply(Math, arr), minLastIndex: arr.lastIndexOf(Math.min.apply(Math, arr))}
}
console.log(findMinimum([1, 4, -2, 11, 8, 1, -2, 3]))

/* 5.a
Write a function that finds all the elements in a given array less than a given element. 
	Input: [2, 3, 8, -2, 11, 4], 6 
	Output: [2, 3, -2, 4] */
  //without builtIn
  function findLess (arr,n) {
    newArr1 = [];
    for (i = 0; i < arr.length; i++)
    if (arr[i] < n) {
      newArr1[newArr1.length] = arr[i];
    }
    return newArr1;
  }
  console.log(findLess([2, 3, 8, -2, 11, 4], 6))
//with builtIn

var a = [2, 3, 8, -2, 11, 4];
var b = 6;
function lessThanGivenEl(item){
  return item < b;
}
var c = a.filter(lessThanGivenEl)
console.log(c);

/* 5b.  
Write a function that finds all the elements in a given array that start with the “pro” substring. 
The function should be case insensitive. 
		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
	Output: [’Programming’, ‘product’] */
//without buildIn
function findSubString (arr) {
  newArr = [];
  for (i=0; i<arr.length; i++) {
    if (arr[i][0] === 'P' || arr[i][0] === 'p' && arr[i][1] === 'r' && arr[i][2] === 'o') {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}
console.log(findSubString(['JavaScript', 'Programming', 'fun', 'product']))
//with builtIn filter, toLowerCase, indexOf

var words = ['JavaScript', 'Programming', 'fun', 'product']

function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}
console.log(filterItems(words, 'pro')) 

/* 5c.
Write a function that expects an array and a callback function that filters out some of the elements. 
Use functions defined in a) or b) to test it. 
*/

/* 6a.
Write a list (array) of products you usually buy in the supermarket. 
Write a price and name for each product. For example,
	[
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]
*/
var array = [
    {name: 'apples', price: 100}, 
    {name: 'milk', price: 80}, 
    {name:'bananas', price: 150}
    ]

/*
6b.Write a function that calculates the total price of your shopping list. */
function totalPrice(array) {
    return array[0].price + array[1].price + array[2].price
}
console.log(totalPrice([
  {name: 'apples', price: 100}, 
  {name: 'milk', price: 80}, 
  {name:'bananas', price: 150}
  ]))
/*
6c.Write a function that calculates the average product price of your shopping list. 
Print this value with the precision of three decimals.
(array[0].price + array[1].price + array[2].price)/array.length */ 
//without built in
function averagePrice(array) {
    return (array[0].price + array[1].price + array[2].price)/array.length
}
console.log(averagePrice([
  {name: 'apples', price: 100}, 
  {name: 'milk', price: 80}, 
  {name:'bananas', price: 150}
  ]))
//presicion of the three decimals missing

//with built in function


/*  6d.Write a function that prints out the name of the most expensive product on your shopping list. 
Write the name in uppercase. 
*/
//with built in function
function findMaximum (arr) {
  var a = arr.length;
  var max = 0;
  var maxName = 0;
  while (a--) {
    if (arr[a].price > max) {
      max = arr[a].price;
      maxName = arr[a].name;
    }
  }
  return {'Name of the most expensive product is': maxName.toUpperCase(maxName)}
}
console.log(findMaximum([
  {name: 'apples', price: 100}, 
  {name: 'milk', price: 80}, 
  {name:'bananas', price: 150}
  ]))

  //with built in function return max value
  function findMaximum(arr){
      return {'Max value': Math.max.apply(Math,arr.map(function(o){return o.price}))};
  }
  function findNameOfMaximum (arr) {
    return {};
  }
    console.log(findNameOfMaximum([
    {name: 'apples', price: 100}, 
    {name: 'milk', price: 80}, 
    {name:'bananas', price: 150}
    ]))
  


/*
7a. Write a function that checks if a given string is written in all capitals.*/

function checkUpperCase (string) {
  newString = '';
    if (string === string.toUpperCase(string)) {
        newString = 'String is written in all capitals.';
    }
    else {
      newString = 'String is not written in all capitals.';
    }
    return newString;
}
console.log(checkUpperCase('NEWSTRING'))

/*
7b. Write a function that checks if a given string contains any digits.*/
// code without built in 
function checkIfContainDigits(string){
  newString = '';
  for (i=0; i < string.length; i++) {
    var a = string[i];
    if (typeof a !== typeof Number) {
      newString = 'String contains digits.'
    }
    else {
      newString = 'String does not contains digits.'
    }
  }
  return newString;
}
console.log(checkIfContainDigits('izzhv'))


//code with built in

function hasNumber(myString) {
  return /\d/.test(myString);
}
console.log(hasNumber('crasa'))

/*
7c. Write a function that checks if a given string is a valid hexadecimal color.*/

function checkHex(string){
     for(var i = 0; i < string.length; i++){
        var characters = string[i];
        if ((characters < '0' || characters > '9') &&
            (characters < 'A' || characters > 'F'))
        {
            return "No";
        }
    }
    return "Yes";
}
var string = "BF57C";
console.log(checkHex(string));
/*
7d. Write a function that checks if a given number belongs to the interval from 1900 to 2018. */

    
function checkNumber(val1, val2, val3) {
  var maxVal = val1 > val2 ? val1 : val2
  var minVal = val1 < val2 ? val1 : val2
  if (val3>minVal && val3<maxVal) {
      return true;
  }
    else {
      return false;
    }
}
console.log(checkNumber(1900, 2018, 1890))
/*
7e.Write a function named validator that returns an object with properties stringValidator, 
passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).
*/


/*8.
Write a function that calculates a number of days to your birthday.
Input: 25 February 
Output: 5 days
*/
function daysToBirthday(month, day) {
    today = new Date();
    var dayLast=1000*60*60*24;
    var birthday = new Date(today.getFullYear(), month, day);
    if (today.getMonth() == month && today.getDate() > day) {
        birthday.setFullYear(birthday.getFullYear()+1); 
    }  
      return Math.ceil((birthday.getTime()-today.getTime())/(dayLast))+ " days left until birthday of my love!";
}
console.log(daysToBirthday(05,25))

/*9.
Write a function that for a given departure and arrival time calculates the time the trip takes.
	Input: 8:22:13 11:43:22
	Output: 3 hours 21 minutes 9 seconds
  */ 
 
  /*
  10a.
Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
10b.
Write a function that calculates the distance between two points in the space. 
*/
/*
11.
a. Write a function that generates a random integer value between 5 and 20.
b. Write a function that generates a random integer value between 50 and 100. 
c. Write a function which expects a number and a callback generator function and 
returns an array of numbers produced by the generator function.    

*/
/*
12.
 Write a function that shuffles the elements of a given array. 
		Input: [3, 6, 11, 2, 9, 1]
		Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)*/

    function changeOrderInArray (array){
      return array.sort(() => Math.random() - 0.5); // We will sort new array with Built in function who randomize elements 
    }
    console.log(changeOrderInArray([3, 6, 11, 2, 9, 1]))

  