//1
var s = 'abc'
console.log(s + s);

//2
for (var i = 1; i < 6; i++){
    if (i==2 || i == 4)
    console.log(i)
}
//3
var IsBlue = true;
var IsSolid = false;
console.log(IsBlue || IsSolid)

//4
var array = [2,15,18,-4,2]
var result = array[0]

for (var i = 1; i < array.length; i++){
    if (array[i] > result){
        result = array[i];
    }
    
}
console.log(result)
//5
var a = [2,3,11];
a.length =5;
console.log(a)
//6
var s ='coffee';
s[0] = 'C';
console.log(s)
//7
function mul (a,b){
    var result;

    result = a*b;

    return result;
}
var product;
product = mul(4);
console.log(product)
//8
var n = 23;
n -=2;
console.log(n);

//9
var a = 10;
var b = 12;
var tmp;
tmp=a;
a=b;
b=tmp;
console.log(a,b)

//10
function f(a,b) {
    return a+b;
}
console.log(f(12))
//11
var numbers = [4,5,12,9]
console.log(numbers.length)
//12
function f(){}
var result;
result = f();
console.log(result)

//13
var isWriter= true;
console.log(!isWriter)

//14
var sum = 0;
for (var i=0; i < 5; i++){
    sum +=i;
    console.log(sum)
} 

//15
var array = [];
for (var i = 0; i < 4; i++) {
    array[2 * i] = i;
    array[2 * i + 1] = i;
}
console.log(array);

//16

var description = "Do the magic";
var s = '';
for (var i = description.length; i >= 0; i--){
    s = s + description[i];
}
console.log(s);

//17
console.log(2 + true)

//18

var message = '';
var n = 4;

while (n>=0) {
    message += '*'
    n--;
}
console.log(message)
//19
var sum = 0;
for (var i = 4; i < 8; i = i + 1){
    sum += i;
    console.log(sum)
}

//20
var result;
var n;

n = 14;

switch (n) {
    case 2:
        result = 1;
        break;
    case 4:
        result = 2;
    case 6:
        result = 3;
        break;
    default:
        result = 100;
}

console.log(result)

//21
var result;
var n = 34;

if (n % 2 == 0){
    result = n / 2;
}
else {
    result = n * 2;
}
console.log(result);
//22
var a = [2, 3, 11, 5, 23, 24];
a.length = 2;
console.log(a);

//23
function selection(a, b, c){
    if (a > b && a > c) {
        return a;
    }
    if (b > a && b > c) {
        return b;
    }
    if (c > b && c > a) {
        return c;
    }
}
var result;
result = selection(4, 5, 2)
console.log(result)

//24

var sum = 0;
for (var i = 0; i < 10; i++){
    if (i == 6){
        continue;
    }
    if (i % 3 == 0){
        sum++;
    }
}
console.log(sum);

//25
function f(a){
    for (var i = 0, j = a.length - 1; i < j; i++, j--) {
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a;
}
console.log(["3", 4, 22, true, -2])
//26
var n = 10;
console.log(++n);

//27
for (var i = 3; i >= 0; i--){
    console.log(i)
}
//28
var message = 'JaVaScRIPRT progrAMMing';
var counter = 0;
for (var i = 0; i < message.length; i++){
    if (message[i] == 'a' || message[i] == 'A'){
        counter++
    }
}
console.log(counter)

//29
var result;
var n;

n = 4;

switch (n) {
    case 2:
        result = 1;
        break;
    case 4:
        result = 2;
    case 6:
        result = 3;
        break;
    default:
        result = 100;
}
console.log(result)
//30

for (var i = 0; i < 10; i +=2){
    console.log(i);
}

//31 
function f(a, b){
    return 1 + a + b;
}
var result;
result = f(4, 5, 32, 11);
console.log(result);
//32
function f(a, b){
    return a + b;
}
var result;
result = f(4, 5);
console.log(result);

//33
var numbers = [4, 5, 12, 9]
console.log(numbers.length)
//34
var s = 'ab34abc'
console.log(parseInt(s))

//35
function sum(){
    return arguments[0] + arguments[2];
}
var result;
result = sum(2, 5, 11, 'abc')
console.log(result);

//36

function mul(a, b){
    var result;
    return result;
    result = a+b;
}
var product;
product = mul(4,5);
console.log(product)

//37
for (var i = 1; i < 6; i++){
    if (i==2 || i == 4){
        continue;
    }
    console.log(i)
}

//38
var array = [];
for (var i = 0; i < 4; i++){
    array[i] = 2 * i;
}
console.log(array);

//39

for (var i = 0; i < 5;){
    console.log('*')
}

//40
var IsBlue = true;
var IsSolid = false;
console.log(IsBlue && IsSolid)

//41
var n = 5;
var numberOfOdds = 0;
var i = 0;

while(i <= n) {
    if (i % 2 == 0){
        numberOfOdds++
    }
    i++
}
console.log(numberOfOdds);
//42
for (var i = 1; i < 6; i++) {
    if ( i === 3 || i === 4){
        break;
    }
    console.log(i);
}
//43
var sum = 0;
for (var i = 0; i < 10; i++){
    if (i % 3 == 0){
        sum++;
    }
    if (i == 8){
        break;
    }
}
console.log(sum);

//44

var a = [2, 3, 11];
a.length = 5;
console.log(a);

//45

var s = '34abc'
console.log(parseInt(s))

//46
var s = 'JavaScript Programming'
var result = s[3];
console.log(result);



 
 
 


