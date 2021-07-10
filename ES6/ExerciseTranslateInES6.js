/*1. Write a function that capitalizes the first letter of 
each string argument it receives.  
	Function arguments: ['hello', 'there', 'ES', 6]
	Output: ['Hello', 'There', 'ES'] */

let capitalizeFirstLetter = (...arguments) => {
    let array = Array.from(arguments);
    let newArray = array.filter (e => typeof e == 'string');
    newArray.forEach(function (element, i, newArray) {
        newArray[i] = element.charAt(0).toUpperCase() + element.slice(1);
    })
    console.log(newArray)
}
capitalizeFirstLetter('hello', 'there', 'ES', 6)


/*   2. 
Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
	Output2: [ 24, 20 ] // tax only*/

const products = [{ name: "Banana", price: 120.23, date: new Date() }, { name: "Orange", price: 106, date: new Date() }]
 
const productsWithTax = products.map(product => {
 
    const { price: prodPrice } = product;
 
    const newProd = {
        ...product,
        price: Number.parseFloat(prodPrice),
        priceWithTax: prodPrice * 1.2,
        tax: prodPrice * 0.2
    }
    return newProd
})
console.log(products);
console.log(productsWithTax);
console.log([parseInt(productsWithTax[0].tax), parseInt(productsWithTax[1].tax)])

/*	3.
Write a function that increases each element of the given array by the given value. 
If the value is omitted, increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
	Output: [6, 8, 13, -7, 4.1]*/
let array = [4, 6, 11, -9, 2.1];
let value = 2;


function increaseValue(array, n=1){
    let newArray = [];
    array.forEach((e) => {
        newArray.push(e + n);
    })
    return newArray;
}
console.log(increaseValue(array,value))
console.log(increaseValue(array))


/* 4.
    Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0] */

    let array1 = [6, 11, 9, 0, 3, 9, 22, 32, 8];

    const filteredArray = array1.filter(element => element % 2 == 0)
   
    console.log(filteredArray);


    /*5.
Write a function that filters all the strings from the given array that contain substring JS or js.
	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
	Output: ['babel.js, 'JS standard'] */

    let array2 = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
    const filteredStrings = array2 => array2.filter(element => element.includes('JS') || element.includes('js'))
    console.log(filteredStrings(array2));


/*6. - pravo resenje sa funkcijom
Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
	Output: [7, 8]*/
    let array3 = [1.6, 11.34, 9.23, 7, 3.11, 8];
    const filteredInteger = array3  =>  array3.filter(element => element % 1 === 0)
    const result = filteredInteger(array3);
    console.log(result)

/*7.
Write a function that filters all integer arguments that contain digit 5.
	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
	Output: [45, 553]*/

let filteredInteger = (...arguments) => 
arguments.filter(element => typeof element === 'number' && element.toString().includes('5') && element % 1 === 0) 
console.log(filteredInteger(23, 11.5, 9, 'abc', 45, 28, 553))

/*	8.
Write a function that returns indexes of the elements greater than 10. 
	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
	Output: 1, 2, 5*/
let array = [1.6, 11.34, 29.23, 7, 3.11, 18];
function filterGraeter(array){
    let newArray = [];
    array.forEach((item) => {
        if(item > 10) {
            newArray += array.indexOf(item);
        }
    });
    return newArray.split('') + " ";
} 
console.log(filterGraeter(array))


/*9.
Create an array of persons. A person should be an object with name and age properties. 
Experiment with enhanced object literals. 
Write a function that prints out the names of persons older than 25. 
Write a function that check if there is a person older than 40.
Write a function that checks if all persons are older than 20.   */

let persons = [{name:'Sasa', age:47}, {name:'Dusan', age:19}, {name:'Sladja', age:26}, {name:'Nikola', age:35}];
//console.log(persons[0].name); 

/* b.	Write a function that prints out the names of persons older than 25. */

const printOlder = array => array.forEach ((item => {
    const { age, name } = item;
    if (age > 25) console.log(name);
}));

printOlder(persons);

/* c.	Write a function that check if there is a person older than 40.*/
const isOlder = array => array.forEach ((item => {
    const { age, name } = item;
    if (age > 40) console.log(`${name} is older than 40`)
}));
isOlder(persons);



/*10.
Write a function that checks if the given array is an array of positive integer values. 
	Input: [3, 11, 9, 5, 6]
	Output: yes

	Input: [3, -12, 4, 11]
	Output: no*/

    
    let checkPositiveInteger = (...arguments) =>
        Math.sign(...arguments) === 1 ? console.log('yes') : console.log('no')
    //arguments.forEach(element => typeof element === 'number' && element % 1 === 0 && element.Math.sign()) 
        checkPositiveInteger(-3, 11, 9, 5, 6)

    const checkPositive = (arr) => {
        let b = arr.every((args) => args > 0)
        if (b == true) {
            return 'yes';
        }
        return 'no';
    }
    console.log(checkPositive([3, 11, 9, 5, 6]));
    console.log(checkPositive([3, -12, 4, 11]));

/* 11.
Write a function that calculates the product of the elements of the array. 
Input: [2, 8, 3]
Output:  48*/

let array4 = [2, 8, 3];
const multiplyElements = array4  =>  array4.reduce((a, b) => a*b, 1)
const result = multiplyElements(array4);
console.log(result)

/* 12.
Write a function that calculates the maximum of the given array. 
Input: [2, 7, 3, 8, 5.4] 
	Output: 8
*/
let array5 = [2, 7, 3, 8, 5.4, 11];
const findMaximum = array5 => Math.max(...array5);
const result = findMaximum(array5);
console.log(result);


console.log(true == 1);