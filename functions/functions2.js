/* 1. Write a function to check whether the `input` is a string or not.
&quot;My random string&quot; -&gt; true
12 -&gt; false */

function isString(input) {
    if (typeof input === 'string' ) {
        return true
    } 
        return false     
}
console.log(isString(12))

/*
2. Write a function to check whether a string is blank or not.
&quot;My random string&quot; -&gt; false
&quot; &quot; -&gt; true
12 -&gt; false
false -&gt; false */

function isBlank (input) {
    if (input === "" ) {
        return true
    } 
        return false     
}
console.log(isBlank(""))


/*
3. Write a function that concatenates a given string n times (default is 1).
&quot;Ha&quot; -&gt; &quot;Ha&quot;
&quot;Ha&quot;, 3 -&gt; &quot;HaHaHa&quot; */

function concHaHaHa(n) {
    var string = 'Ha';
    var conc = '';
    
    for (i =0; i < n; i++) {
        conc = conc + string;
    }
    return conc;
}
console.log(concHaHaHa(5))

/*
4. Write a function to count the number of letter occurrences in a string.
My random string;, "n"; --> 2 */

function letOccur(str, a){
    var countletter = 0;
    
    for (var i=0; i < str.length; i++) {
        if (str[i] === a) {
            countletter ++
        }
    }
    return countletter;
}
var string = 'My random string'
var letter = 'n'

console.log(letOccur(string, letter))


 
/*
5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1. */

function firstOccur (string, char) {
    var position = 0;
    for (var i = 0; i < string.length; i++){
    if (string[i] === char){
        position = i + 1;
        break
    }
    else position = -1
    }
    return position;
}

var string = 'My funny valentine'
var char = 'n'

console.log(firstOccur(string, char))

/*
6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1. */ 
function firstOccur (string, char) {
    var position = 0;
    for (var i = string.length - 1; i >= 0; i--){
    if (string[i] === char){
        position = i + 1;
        break
    }
    else position = -1
    }
    return position;
}

var string = 'My funny valentine'
var char = 'n'

console.log(firstOccur(string, char))
/*
7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
&quot;My random string&quot; -&gt; [&quot;M&quot;, &quot;y&quot;, null, &quot;r&quot;, &quot;a&quot;]
&quot;Random&quot; -&gt; [&quot;R&quot;, &quot;a&quot;, &quot;n&quot;, &quot;d&quot;, &quot;o&quot;, &quot;m&quot;] */
 
function convert (stringToArray) {
    arrayNew =[]; 
    
    for ( var i = 0; i < stringToArray.length; i++) {
        if (stringToArray[i] === ' ') {
            arrayNew[i] = null;
        }
        else {
            arrayNew[i] = stringToArray[i]
        }
    }
    return arrayNew
}
console.log(convert('My funny valentine'))
/* 8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself. */
function primeNum(p) {
var isPrime = true;
for (var i = 2; i < 10; i++){
if (p % i === 0 && p !== i) {
    isPrime = false;
    break;
    }
    }
    return isPrime;
}
console.log ('Is this prime number?' + primeNum(11))

 /*
9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
&quot;My random string&quot;, &quot;_&quot; -&gt; &quot;My_random_string&quot;
&quot;My random string&quot;, &quot;+&quot; -&gt; &quot;My+random+string&quot;
&quot;My random string&quot; -&gt; &quot;My-random-string&quot; */

function replaceSpace(stringToSeparate,separator) {
    if (separator === undefined) {
        separator = '-';
    }
    stringNew = ''
    for (var i = 0; i <stringToSeparate.length; i++) {
        if (stringToSeparate[i] === ' ') {
            stringNew += separator;
        }
        else {
            stringNew += stringToSeparate[i];
        }
    }
    return stringNew;
}

console.log(replaceSpace('My random string'));


/*
10. Write a function to get the first n characters and add “...” at the end of newly created string. */ 


function beginOfString(stringToShort,n) {
    var shortNewString = '';
    for (var i = 0; i < n; i++) {
        shortNewString += stringToShort[i];
    }
    shortNewString += '...';
    return shortNewString;
}

console.log(beginOfString('A long, long time ago there was a small kingdom.', 17));
/*
11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
[&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity] -&gt; [1, 21, 42, 1000] */

function convertStrToNum(arrStr) {
    var strNum = [];
    var j = 0;
    for (var i = 0; i < arrStr.length; i++) {
        if (isFinite(parseFloat(arrStr[i]))) {
        strNum[j] = parseFloat(arrStr[i]);
        j++
        }
      //  console.log('Na poziciji i = ' + i +' Element stringa je' + arrStr[i] +  '\n');
      //  console.log('Trenutna pozicija j = ' + (j - 1) +' Novi niz je ' + strNum +  '\n');
    }
    return strNum;
}

console.log('New string without non-numeric values is: ');
console.log(convertStrToNum(["1", "21", undefined, "42", "1e+3", Infinity, '6']));


/*
12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed. */

function pension(birth,currentY,gender) {
    var ret;
    if (gender === 'man') {
        ret = 65 - (currentY - birth);
    }
    else if (gender === 'woman') {
        ret = 60 - (currentY - birth);
    }
    else {
        return 'Please check input.';
    }
    if (ret > 0) {
        return ret + ' years to retirement';
    }
    else {
        return 'Already retired'
    }

}

console.log(pension(1981,2021,'man'));
console.log(pension(1960,2021,'woman'));
/*
13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -&gt; 1st
11 -&gt; 11th */
function humanize(num) {
    var hum;
    if (num > 10 && num < 14) {
        hum = num + 'th'
    }
    else {
        moduo = num%10;
        switch (moduo) {
            case 1:
                hum = num + 'st';
                break;
            case 2:
                hum = num + 'nd';
                break;
            case 3:
                hum = num + 'rd';
                break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:    
            case 0:
                hum = num + 'th';
                break;        
        }
    }
    return hum;
}

console.log(humanize(11));
console.log(humanize(12));
console.log(humanize(13));
console.log(humanize(1));
console.log(humanize(2));
console.log(humanize(3));
console.log(humanize(10));
console.log(humanize(1021));
console.log(humanize(100));


