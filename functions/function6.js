/* 1. Write a function to count vowels in a provided string. 
Vowels are a, e, i, o, and u as well as A, E, I, O, and U. */

function vowelCount(str) {
    var countV = 0;
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                countV++
                break;
                    default:
                break;
        }
    }
    return countV
}
console.log(vowelCount('Write Arrays.'))

   


/* 2. Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3] */

function alternate(arr1, arr2) {
    var altArr = [];
    for (var i = 0; i < arr1.length; i++) {
        altArr[altArr.length] = arr1[i];
        altArr[altArr.length] = arr2[i];
    }
    return altArr
}
console.log(alternate(['a','b','c'], [1,2,3]))
 

/* 3. Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/

function rotate(arr,k) {
    var rotArr = [];
    var j = 0;
    for (var i = 0; i < arr.length; i++){
        if (i > k + 1) {
            rotArr[i] = arr[j];
            j++;  
        }
        else {
            rotArr[i] = arr[i+k];
        }
    }
    return rotArr;   
}
console.log(rotate([1,2,3,4,5,6],2));

/*
4. Write a function that takes a number and returns array of its digits. */

function digit(num) {
    var string = num + '';
    var array = [];
    for (i = 0; i < string.length; i++){
        array[i] = string[i]
    }
    return array
}
console.log(digit(123456))

 

/*
5. Write a program that prints a multiplication table for numbers up to 12. */

function multiplicationTable(num){
    var result = '';
    for (i = 1; i <= num; i++){
        
        for (j = 1; j <= num; j++) {
            result += ' ' +  i * j + ' ';   
        }
        result = result + '\n'
    }
    
    return result
}
console.log(multiplicationTable(12))


/*
6. Write a function to input temperature in Centigrade and convert to Fahrenheit. 
*/

function centigradeToFahrenheit(C){
    var F = (C * 9/5) + 32;
    return F;
 }
console.log(centigradeToFahrenheit(10))
/*
7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements. */

function findMax(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
      var element = array[i];
      if (element > max && typeof element === "number") {
        max = element;
      }
    }
    return max;
  }
  var array = [2, 5, "65", "7", 8, 12, -4, 5, 45];
  console.log(findMax(array));

/*
8. Write a function to find the maximum and minimum elements. Function returns an array. */

function findMaxMin(array) {
    var newArr = [];
    var max = array[0];
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > max && typeof array[i] === "number") {
        newArr[0] = array[i];
      }
      if (array[i] < min && typeof array[i] === "number") {
        newArr[1] = array[i];
      }
    }
    return newArr;
  }
  var arr = [2, 5, "65", "7", 8, 12, -4, 5, 45];
  console.log(findMaxMin(arr));

/*
9. Write a function to find the median element of array.*/

var Median = function (a) {
    var medianIndex = 0;
    if (a.length % 2 == 1) {
      medianIndex = (a.length - 1) / 2;
      return a[medianIndex];
    } else {
      return 'Array does not have median element'
    }
  };
  console.log(Median([1, 2, 3, 4, 5, 6, 7]));

/*
10. Write a function to find the element that occurs most frequently. */

function frequency(arr) {
  var mostF = arr[0];
  var occurs = 0;
  for (var i = 0; i < arr.length; i++) {
    var counter = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }
    if (occurs < counter) {
      mostF = arr[i];
      occurs = counter;
    }
  }
  return mostF;
}
var a = [8, 4, 1, 2, 7, 5, 1, 1, 1, 2, 5];
console.log(frequency(a));

/*
11. Write a function to find and return the first, middle and last element of an 
array if the array has odd number of elements. If number of elements is even, 
return just the first and the last. In other cases (empty array), input array should be returned. */
var firstMiddleLast = function (a) {
    var medianIndex = 0;
    if (a.length % 2 == 1) {
      medianIndex = (a.length - 1) / 2;
      return a[0] + " " + a[a.length - 1] + " " + a[medianIndex];
    } else {
      return a[0] + " " + a[a.length - 1];
    }
  };
  console.log(firstMiddleLast([1, 2, 3, 4, 5, 6, 7]));
 

/*
12. Write a function to find the average of N elements. 
Make the function flexible to receive dynamic number or parameters. */

function Average(array){
  var n;
  var sum = 0;
  for(i=0; i <= array.length; i++){
    sum += i;
    n = sum / (array.length);
  }
  return n;
}
console.log(Average([1,2,3,4,5,6]))

 
/*
13. Write a function to find all the numbers greater than the average. */

function greaterThanAverage(array){
  greater = [];
  var n;
  var sum = 0;
  for(i=0; i <= array.length; i++){
    sum += i;
    n = sum / (array.length);
  }
  for(i=0; i<array.length; i++){
    if(array[i] > n){
      greater[greater.length] = array[i];
          } 
  } return greater
}
console.log(greaterThanAverage([1,2,3,4,5,6]))

/* 14.
The body mass index (BMI) is the ratio of the weight of a person (in kilograms) 
to the square of the height (in meters). 
Write a function that takes two parameters, weight and height, 
computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40 */

function BMI(weight,height) {
  index = weight/(height*height);
  var result = '';
    if (index <= 15) {
      result += 'Starvation'
    } else if (index >= 15 && index < 17.5){
      result += 'Anorexic'
    } else if ( index >= 17.5 && index < 18.5) {
      result += 'Underweight'
    } else if ( index >= 18.5 && index < 25){
      result += 'Ideal'
    } else if ( index >= 25 && index < 30){
      result += 'Overweight'
    } else if ( index >= 30 && index < 40) {
      result += 'Obese'
    } else if ( index >= 40) {
      result += 'Morbidly obese'
    }
  return result
}
console.log(BMI(80,1.78))
 


/* 15.
Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/

function makeFrame(array) {
	var maxWordLength = 0;
	var topAndBottomString = '';
	var topAndBottomlength = 0;
	var middlePart = '';
	var spaceLength = 0;
	var spaceString = '';
	var frame = '';
	var word = '';
	function makeStringFromChar(char, num) {
		var resultString = '';
		for (var i = 0; i < num; i++) {
			resultString += char;
		}
		return resultString;
	}
	//find the longest word
	for (var i = 0; i < array.length; i++) {
		word = array[i];
		if (word.length > maxWordLength) {
			maxWordLength = word.length;
		}
	}
	//make top and bottom strings
	topAndBottomlength = maxWordLength + 4;
	topAndBottomString = makeStringFromChar('*', topAndBottomlength);
	//create middle part
	for (var k = 0; k < array.length; k++) {
		word = array[k];
		spaceLength = maxWordLength - word.length;
		spaceString = makeStringFromChar(' ', spaceLength);
		middlePart += '* ' + word + spaceString + ' *\n';
	}
	//create frame
	frame = topAndBottomString + '\n' + middlePart + topAndBottomString;
	return frame;
}
console.log(makeFrame(['Hello', 'world', 'in', 'a', 'frame']))