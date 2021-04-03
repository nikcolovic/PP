/* Try to solve all assignments on a separate branch of bit-pp repository. Don’t forget to first pull
changes done at class and push the new repository to remote when done with all the work at the
end. Ignore this if git branching is not presented to you yet.
/*
1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
"My random string", "JS"; --> "JS My random string";
"My random string";, "JS";, 10 --> "My random JS string"; */


function insert(main_string, ins_string, pos) {
    if(typeof(pos) == "undefined") {
     pos = 0;
   }
    if(typeof(ins_string) == "undefined") {
     ins_string = '';
   }
    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
}
 console.log(insert("My random string",'JS '));
 console.log(insert("My random string",'JS ',10));


/*2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, '', undefined, 47, null] */

function newString (arr) {
    var str = '';
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === false || arr[i] === null) {
            str = str;
        } else if (isFinite(arr[i]) === true) {
            str += arr[i];
        }
    } 
    return str;
}
console.log(newString ([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/*
3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null] Output [15, -22, 47] */

function filterFalsy (arr) {
    var newArr = [];
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === false || arr[i] === null || arr[i] === 0 || arr[i] === '') {
                newArr = newArr;
            } else if (isFinite(arr[i]) === true) {
                newArr[newArr.length] = arr[i];
            }
        }
    return newArr;
} 
var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null]
console.log(filterFalsy(arr))


/*
4. Write a function that reverses a number. The result must be a number.
12345 --> 54321 // Output must be a number */

function reverse(input){
    var strInput = '';
    var input = input + '';
    for (var i = input.length - 1; i >=0; i--){
        strInput += strInput[i];
    }
    return parseInt(strInput)
}
console.log(reverse(12345))
/*
5. Write a function to get the last element of an array. 
Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  */


function lastElement(array, n) {
    if (array == null) 
      return void 0;
    if (n == null) 
       return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));  
    };
  
  console.log(lastElement([7, 9, 0, -2])); 
  console.log(lastElement([7, 9, 0, -2],3));
  console.log(lastElement([7, 9, 0, -2],6));

/* 6. Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] */

/*7. Write a function that says whether a number is perfect. 28 -> 28 is a perfect number.

Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the 
sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself
 (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of 
 its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. 
Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. 
The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/
function perfectNumber(number){
    var array = [];
    var sum = 0;
    var result = 0; 
    for ( var i = 1; i <= number; i++){
        if (number % i === 0){
            array[array.length] = i;
            }
        }
        for (j = 0; j < array.length; j++){
            sum += array[j]
        }
    result = sum / 2
    return number === result;
}
var a = 8128;
console.log(perfectNumber(a))

/* 8.
Write a function to find a word within a string. 
'The quick brown fox ', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times" */
/*
function wordCount(str,word) {
    var counter = 0;
    var counterW = 0;
    for (var i = 0; i < str.length; i ++ ) {
        if (str[i] === word[0]) {
            for (var j = 1; j < word.length; j++) {
                if (word[j] === str[i+j] && str[i+j+1] !== ' ' ) {
                    counterW ++
                }
            }
        }
    }
} */

function wordFind (stringW, word)
    var checkWOrd = '';
    var countW = 0;
    stringW += ' ';

    /* 9. Write a function to hide email address. "myemailaddress@bgit.rs" -> "mye...@bgit.rs" */
function hideEmail(hiddenEmail){
    var email = "myemailaddress@bgit.rs"
    var newstring = "";
    var index = 13;

    for (var i = 0; i < email.length; i++) {
        switch (i) {
            case 0:
            newstring += email[i];
            break;
            case 1:
            newstring += email[i];
            break;
            case 2:
            newstring += email[i] + '...';
            break;    
        }
        if(email[i] === "@"){
            newstring += email[i]
            index = i;
        }    
    }       
    for (j = index +1; j < email.length; j++){
        newstring += email[j]
    } 
    return newstring
}
    var hiddenEmail = "myemailaddress@bgit.rs"
    console.log(hideEmail(hiddenEmail))

/*10.
Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
*/


var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var counter = 1; 
var index = 0;
var item;

for (var i=0; i<arr.length; i++) {
        for (var j=i; j<arr.length; j++){
                if (arr[i] == arr[j])
                 index++;
                if (counter<index)
                {
                  counter=index; 
                  item = arr[i];
                }
        }
        index=0;
}

console.log(item + ' ' + counter +" times  ");
