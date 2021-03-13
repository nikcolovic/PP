/*Variable declaration and initialization
1. Create several variables using different letter cases and beginning characters. Check if they
still exist if you refer to them in different case - does case matter here? Try to declare a variable
starting with number as the first character*/

var js=2;
var Js=2;
var mood= 'Osecam se pospano';
console.log(js)
console.log(Js)
console.log(mood)

/*2. Save a string (text) describing your current mood in a variable and print it out in console.*/
var a='in a silent mood'
console.log(a)

/*3. Feel free to play around in the console and get familiar with it.
Arithmetic operators*/

var a=3;
var b=4;
var c=a*b
console.log(c)


/*4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
Why do we get these results?*/

var a=3;
var b=4;
var c=a*b;
var n=a*b-c
var result= 4/2-1.14*3 
console.log(c)
console.log(n)
console.log(result)
/*5. How many grams weight 1.2kg of bananas?*/

var g=1;
var kg=g*1000;
var a=1.2*kg;
console.log( a +'g');


/*6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
about Tom who is being late half an hour? It is hard to be on time these days…*/

var sec=1
var min=60*sec
var Anna=5*min
console.log('Anna is being late for' + Anna + 'sec')
var Tom=30*min
console.log('Tom is being late for' + Tom + 'sec')


/*7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news
articles each in size 98KB can fit in it?*/

var giga=4;
var memorijakb=giga*1000000;
var dokument=98;
var brDokumenata = memorijakb/dokument;
var ostatak = brDokumenata % dokument;
var broj= (memorijakb - ostatak) / dokument
console.log(broj - ostatak);


/*9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?*/

var a=2;
console.log (a*=2);

var b=2;
console.log (b+=3);

var c=10;
console.log (c/=5);

var d=10;
console.log(d-=7)

/*10. Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.*/

var name = "Nikola";
console.log('My name is ' + name);

var age = 45;
console.log('I am ' + age + ' years old.');

var kittens =' cat ';
result= !kittens;
console.log('I have a ' + kittens);
console.log(result)

console.log(typeof name);
console.log(typeof age);
console.log(typeof result)

/*11. Check which type are these values:
- “number”
- true
- null
- “false”
- 56*/

var a="number"
var b=true
var c=null
var d='false'
var e=56
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)

/*Logical operators
Logical operators
12. Check how good you are at guessing the Boolean equivalent of different values using the
console. Do you remember how to check for a Boolean equivalent of a value?*/

var a=33;
var b='';
var c='hello';
var d=null;
var e=undefined;
var f= 0;

console.log(!!a)
console.log(!!b)
console.log(!!b)
console.log(!!d)
console.log(!!e)
console.log(!!f)

/*13. Use the console to check the results you think should go in the following table:
p q p &amp;&amp; q p || q
true true
true false
false true
false false*/

console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

/*14. If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120*/
var age = 45;
var result = age === 45;
console.log(result);


/*15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
we store the current speed value in the variable speed. Write an expression which will check if
we are driving drive safely or not? (true if we are driving safe and false if not)*/
var a = 80
var safe = a < 120 && a>60;
var not  = a> 120 && a<60;
console.log(safe);
console.log(not);
 