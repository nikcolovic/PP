/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen. */

var i = 0

for (var i = 0; i <=15; i++) 
    if (i%2===0){
        console.log('even')
    } 
        else {
            console.log('odd')
        }

/*2. Write a program to sum the multiples of 3 and 5 under 1000.*/

var sum=0;

for (var i = 0; i < 1000; i++){
        if (i % 3 === 0 && i % 5 === 0){
            sum+=i
        }
    }
    console.log(sum)


/*3. Write a program to compute the sum and product of an array of integers.*/

var array = [10, 20, 30, 40, 50, 60],
    sum = 0,
    product = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    sum += array[i];
    product *= array[i];
    }
console.log('Sum : '+sum + ' Product :  ' +product);

/*4. Write a program which prints the elements of the following array as a single string.*/

var string = "";
var array = ['1','A', 'B',"c", "r", true, NaN, undefined];
for (var i = 0; i < array.length; i++) {

    string += array[i];
}

console.log(string)

/*5. Write a program that prints the elements of the following array.*/
var a = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]];

for (var i = 0; i < a.length; i++) {
    console.log(a[i] + '\n')
}


console.log(a[0])
console.log(a[1])
console.log(a[2])





/*6. Write a program that outputs the sum of squares of the first 20 numbers.*/

var sum = 0
        for ( i = 1; i <= 20; i++) 
                sum += (i * i);
   
        console.log(' Sum is ' + sum);
        
        


/*7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68
The grades are computed as follows :

< 60% F
< 70% D
< 80% C
< 90% B
< 100% A*/

var students = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];

var averageMarks = 0;

for (var i=0; i < students.length; i++) {
        averageMarks += students[i][1];
        var avg = (averageMarks/students.length);
}

console.log("Average grade: " + (avg));

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                } 
        else if (avg < 80) {
                console.log("Grade : C"); 
        } 
        else if (avg < 90) {
                console.log("Grade : B"); 
        } 
        else if (avg < 100) {
                console.log("Grade : A"); 
}

/*8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
&quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).*/


for ( var i = 1; i <= 100; i ++ ) {
  
    var divisibleByThree = i % 3;
    var divisibleByFive = i % 5;
    
    if ( (divisibleByThree === 0) && (divisibleByFive === 0) ) 
        console.log( "FizzBuzz");

    else if (divisibleByThree === 0)
      console.log( "Fizz");
    
    else if (divisibleByFive === 0)
      console.log( "Buzz");
    
    else
      console.log( i );
  } 
  