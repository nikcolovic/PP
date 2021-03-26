/*
1. Write a program that calculates the maximum of two given numbers.*/

function max(a, b) {
    if (a > b) {
        return a;
    }else if (b>a){
        return b;
    }else{
        return "numbers are equal!"
    }
}
var result=max(10, 4);
console.log(result);

/*
2. Write a program that checks if a given number is odd. */

function oddNumber(a)  {
    if (a % 2 !== 0) {
        return 'Number is even';
} else {
    return 'Number is odd';
}
}
var result = oddNumber(7)
console.log(result);

/*
3. Write a program that checks if a given number is a three digit long number.*/

function digitNumber (d) {
    if (d-999<=0 && d - 999>=-899){
        return 'It is three digit number'
    } else {
        return 'It is not a three digit number'
    }
}
console.log(digitNumber(100))

/*
4. Write a program that calculates an arithmetic mean of four numbers.*/
function aritmMean() {
    var sum=0;
    for (var i =0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum/arguments.length;
}
var result=aritmMean(2,4,6,8)
console.log(result);



/*
5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
*****
*/
/*function sq(numOfStars) {                   
    var starFinal = '';                                            // Final string
    for (var i = 1; i <= numOfStars; i++) {                        // Main loop for creating rows 
        if (i === 1 || i === numOfStars) {                         // condition for creating the first and last row
            var starL = '';
            for (var k = 0; k < numOfStars; k++) {                 // Loop for first and last row
                starL = starL + '*'; 
            }
            starFinal = starFinal + starL + '\n';                  // Adding created string to the final string
        }
            else {
                var starM = '';
                for (var j = 1; j <= numOfStars; j++) {            // Loop for creating middle rows
                    if (j === 1 || j === numOfStars) {             // Condition for printing '*' or ' ' string
                        var starM = starM + '*';
                    }    
                    else {            
                        starM = starM + ' '; 
                    }
                }
                starFinal = starFinal + starM + '\n';              // Adding created middle row string to the final string
            }
    }
    return starFinal;
}
var star = sq(5);
console.log(star);*/
function sqaureDraw (a) {
    var field = "";
    for (var i = 0; i < a; i++){
        for (var j = 0; j < a; j++) {
            if (i > 0 && i < a-1 && j > 0  && j < a-1) {
                field += " ";
            } else {
                field += "*";
            }
        } 
        field += "\n";
    }
    return field;
}
var result5 = sqaureDraw(7);
console.log (result5);

/*
6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * * 
*/
function stars(f,s,k) {
    var starSumF = '';
    for (var i = 0; i < f; i++) {
        starSumF = starSumF + '*'; 
    }
    var starSumS = '';
    for (var j = 0; j < s; j++) {
        starSumS = starSumS + '*'; 
    }
    var starSumK = '';
    for (var i = 0; i < k; i++) {
        starSumK = starSumK + '*'; 
    }
    return starSumF + '\n' + starSumS + '\n' + starSumK;
}

var f = 5;
var s = 3;
var k = 7;
console.log(stars(f,s,k))

/*
7. Write a program that calculates a number of digits of a given number. */

var a = 123456

function numOfDigits () {
    var string = a + '';
    return string.length;
    }
   
console.log(numOfDigits (a))
/*
8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */

var e = 7;
var a = [2, 4, 7, 8, 7, 7, 1];

function numOfAppearances (k) {
    var k=0;
    for (i=0; i < a.length; i++){
        if (e === a[i]) {
            k = k + 1;
        }
    }
    return k;
}
console.log(numOfAppearances(e,a))

/*
9. Write a program that calculates the sum of odd elements of a given array. */
var array = [1, 2, 3, 4, 5, 6]
var sum = 0

function sumOfOddElements () {
    
    for (i=1;i<array.length; i = i+2) {
        sum = sum + array[i]
    }
    return sum;
}
console.log(sumOfOddElements(array))


/*
10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A. */

var a = 'Aleksandrija';
var letter1 = 'a'
var letter2 = 'A'

function numOfAppearances () {
    var num = 0;
    for (i=0; i < a.length; i++) {   

       if (letter1 === a[i] || letter2 === a[i]) {
            num = num + 1;
       }
    }
    return num;    

}       
console.log(numOfAppearances(a))
/*
11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc. */

var string = 'abc';
var conc = '';
var num = 4;

function numberOfTimes() {
    for (i =0; i < num; i++) {
        conc = conc + string;
    }
    return conc;
}
console.log(numberOfTimes(conc, string))
