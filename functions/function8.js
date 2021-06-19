//IIFE = Immediately Invoked Function Expressions

/*1. Write IIFE that replaces the first and the last element of the given array 
and prints out its elements. 
	Input array: [4, 5, 11, 9]
	Output array: [ 9, 5, 11, 4]*/
    
	//call back version will be later modified :-)
	function replace(array){
		newArray = [];

		for(i = 0; i < array.length; i++){
			if (array[i] === array[array.length-1]){
				newArray += array[0] + ' ';
			}
			else if(array[i] === array[0]){
				newArray += array[array.length-1] + ' ';
			}
			else {
				newArray += array[i] + ' ';
			}
		}
		return newArray;
	}
		console.log(replace([4, 5, 11, 9]))

/*2.Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5
Output: 20 */

//callback version

function one(){
	return 4
}
function two(){
	return 5
}
function surfaceCallBack(a,b){
	return one() * two();
}
console.log(surfaceCallBack(one,two))


// normal version of functions
function surface(a,b){
	return a * b
}
console.log(surface(4,5))
 
/*3.Write IIFE that replaces all appearances of the letters m or M with * and 
returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2*/
function replace(string){
	newString='';
	for(i=0; i < string.length; i++){
		if(string[i] === 'm' || string[i] === 'M'){
			newString += '*'
		}
		else{
			newString += string[i]
		}
	}
	return newString
}
console.log(replace('prograMming'))
function count(newString){
	newString = replace(newString);
	counter = 0;
	for (i=0; i< newString.length; i ++){
		if (newString[i] === '*'){
			counter++;
		}
	}
	return counter;
}
console.log(count(newString));

/*4.Write a function with parameters name and surname that returns a function 
that suggests an email in the form name.surname@gmail.com. 
Input: pera peric
	Output: pera.peric@gmail.com*/
function email(name,surname){
	nameSurname = '';
	nameSurname = name + '.' + surname
	return nameSurname
}
//console.log(email('pera','peric')) good for check iteration
function userNameMail(nameSurname){
	userMail = '';
	userMail = nameSurname + '@gmail.com'
	return userMail
}
console.log(userNameMail(email('pera','peric')))


/*5.Write a function that returns a function that calculates a decimal value 
of the given octal number. 
Input: 034
Output: 28*/
/*function decToOctal(n){
     
    // array to store octal number
    let octalNum = new Array(100);
 
    // counter for octal number array
    let i = 0;
    while (n != 0) {
 
        // storing remainder in octal array
        octalNum[i] = n % 8;
        n = Math.floor(n / 8);
        i++;
    }
 
    // printing octal number array in reverse order
    for (let j = i - 1; j >= 0; j--)
        document.write(octalNum[j]);
}
 
// Driver Code
    let n = 34;
     
    // Function Call
    decToOctal(n);*/
 
 
// This code is contributed by Surbhi Tyagi

/*6.Write a function that checks if a given string is valid password. 
The password is valid if it is at least 6 characters long and contains at least one digit. 
The function should receive two callbacks named successCallback and error
Callback that should be called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!

	Input: JSGuru123
	Output: Your password is cool! */
//callback version
/*function checkValidPassword(string){
	var number;
	for (i=0; i < string.length; i++){
		if(string.length > 6 || typeof string[i] === number){
			successCallback(string);{
			var result = 'Your password is cool!'
			}
			return result;
		} 
		else{
			errorCallback(string);{
			var result = 'Your password is invalid!';
			}
			return result;
		}
	}
	return result;
}
console.log(checkValidPassword('JSGuru123'))*/


//normal function version
function checkValidPassword(string){
	var number;
	for (i=0; i < string.length; i++){
		if(string.length > 6 || typeof string[i] === number){
			var result = 'Your password is cool!'
		} 
		else{
			var result = 'Your password is invalid!'
		}
	}
	return result 
}
console.log(checkValidPassword('JSGuru123'))



/*7. Write a function that filters elements of the given array so that they satisfy 
a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] */

function justArray(array){
	return array;
}
function findOdd(array){
	newArray = [];
	for(i=0; i < array.length; i++){
		if(array[i] % 2 !== 0){
			newArray += array[i] + ' ';
		}
	}
	return newArray;
}
console.log(findOdd([2, 8, 11, 4, 9, 3]))

