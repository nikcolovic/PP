/*1Write a program that compares
two numbers and display the
larger. Result should be
displayed in the console.*/

var a=15
var b=3
if (a<b) {
    console.log(b)
}
else {
    console.log(a)
}

/*2Write a program to check if the
number is divisible by 2. If it
is, print even, if not, print
odd.

Sample numbers: 3, 4, 9 (check one at the time)

Output: odd, even, odd*/

var a=9;
var c= a%2;
if (c===0) {
    console.log('even')
} else {console.log('odd')
}

/*3Write a program to check if the
number is divisible by 3 and 5.
If it is, print that number.

Sample numbers: 15, 12*/
var a = 15

if (a%3 === 0 && a%5 === 0) {
    console.log( a )
} else {console.log('not divisible')
}

/*4Write a conditional statement to
find the sign of product of
three numbers. Display the
result in the console with the
specified sign.

Sample numbers: 3, -7, 2

Output: The sign is -*/

var x = 3
var y = -7
var z = 2
var w =x*y*z


if (x>0 && y>0 && z>0)
 {
      console.log('');
 }
 else if (x<0 && y<0 && z<0)
       {
        console.log('');
       }
       else if (x>0 && y<0 && z<0)
       {
        console.log('');
       }
       else if (x<0 && y>0 && z<0)
       {
        console.log('');
       }
       else
       {
        console.log('The sign is -');
       }

    /*var a = 3;
var b = -7;
var c = 2;
if (a * b * c < 0) {
    console.log ("The sign is -");
} else {
    console.log ("The sign is +");
}
s*/
  
/*5Write a program to check if the
variable is a number. If it’s a
number, check if it is divisible
by 2. If it is, print the
result, if not, show “X”

Sample numbers: 10 | 7 (check one at the time)

Output: 10 / 2 = 5 | X*/

var n=10
var m=n%2
var o=n/2

if (n=Number) {console.log('')
    
} else {console.log('not a number')
    
} 
if (m===0) {
    console.log(o)
} else {console.log('X')
}

/*var a = 10;
if (typeof a === "number" && a % 2 === 0) {
    console.log (a / 2);
} else {
    console.log ("X");
*/
/*6Write a conditional statement to
find the largest of five
numbers. Display the result in
console.

Sample numbers: -5, -2, -6, 0, -1

Output: 0*/
var p = -5
var r = -2
var s = -6
var t = 0
var u = -1

if (p>r && p>s && p>t && p>u)
 {
      console.log(p);
 }
    else if (r>p && r>s && r>t && r>u)
       {
        console.log(r);
       }
    else if (s>p && s>r && s>t && s>u)
       {
        console.log(s);
       }
    else if (t>p && t>r && t>s && t>u)
       {
        console.log(t);
       }
    else if (u>p && u>r && u>s && u>t)
       {
        console.log(u);
       }
       else
       {
        console.log('');
       }

/*var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

var result = '';
if (a >= b && a >= c && a >= d && a >= e) {
result = a;
} else if (b >= a && b >= c && b >= d && b >= e) {
    result = b;
} else if (c >= a && c >= b && c >= d && c >= e) {
    result = c;
} else if (d >= a && d >= b && d >= c && d >= e) {
    result = d;
} else {
    result = e;
}
console.log (result);
*/

/*7Write a conditional statement to
sort three numbers.

Sample numbers : 0, -1, 4

Output : 4, 0, -1*/

var aa=0;
var bb=-1;
var cc=4;

if (aa>bb && aa>cc && bb>cc)
    {
    console.log(aa,bb,cc);
    }
    else if (aa>bb && aa>cc && cc>bb)
    {
    console.log(aa,cc,bb);
    }
    else if (bb>aa && bb>cc && aa>cc)
    {
    console.log(bb,aa,cc);
    }
    else if (bb>aa && bb>cc && cc>aa)
    {
    console.log(bb,cc,aa);
    }
    else if (cc>aa && cc>bb && aa>bb)
    {
    console.log(cc,aa,bb);
    }
    else if (cc>aa && cc>bb && bb>aa)
    {
    console.log(cc,bb,aa);
    }
    else
    {
    console.log('');
    }

/*var a = 0;
var b = -1;
var c = 4;
if (a > b && a > c) {
    if (b > c) {
        console.log (a,b,c);
    } else {
        console.log (a,c,b);
    }
    
} else if (b > a && b > c) {
    if (a > c) {
        console.log (b,a,c);
    } else {
        console.log (b,c,a);
    }
} else {
    if (a > b) {
        console.log (c,a,b);
    } else {
        console.log (c,b,a);
    }
}
*/

   /* Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48*/

var a = 8;
var b = 8;
var result = (a+b);

if (a===b) {
    console.log(3 * result)
}
else {
    console.log (result)
}



/*Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

Output : - Output : true Output : true*/

var a=45;
var b=10;
if (a===50 || b===50 || a+b===50 ){
    console.log('true')
} else {
    console.log('-')
}



/*Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400*/

var a=150

if (a>=20 && a<=100){
        console.log('20 ⇔ 100')
    }else if (a>100 && a<=400) {
        console.log('100 ⇔ 400')
    }
    else {
        console.log('-')
    }   

