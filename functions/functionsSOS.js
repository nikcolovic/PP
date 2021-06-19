/*Write a function that checks if a given string contains digit 5.
Input: “1b895abd” 
Output: true


Input: “1bser9re”
Output: false*/

function checking(element){
    var result = 'false';
    for(i=0; i < element.length; i++){
        if(element[i] === '5'){
            result = 'true';
        }
    }
    return result
}
console.log(checking('b895abd'))


function checking1(element1){
    var result = 'false';
    for(i=0; i < element1.length; i++){
        if(parseInt(element1[i]) === 5){
            result = 'true';
        }
    }
    return result
}
console.log(checking1('b89abd'))



/*2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”*/

function replacing(string){
    var newString = '';
    for (i = 0; i < string.length; i++){
        if(string[i] === 'J' && string[i+1] === 'S') {
            newString += '*';
        }
        else if(newString[newString.length-1] === '*' && string[i] === 'S'){
            newString += '*';
        }
        else {
            newString += string[i];
        }
    }
    return newString
}
console.log(replacing('Programming in JS is super interesting!'))

function replacing1(string1){
    var newString1 = '';
    for (i = 0; i < string1.length; i++){
        if(string1[i] === 'J' && string1[i+1] === 'S') {
            newString1 += '**';
            i++;
        }
        else {
            newString1 += string1[i];
        }
    }
    return newString1
}
console.log(replacing1('Programming in JS is super interesting!'))
/*3.
Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’ 
Output: “Good morning” */
function conc(string,position,insertCharacter){
    var newString = '';
   
    for(i = 0; i < string.length; i++){
        if(string[i] === string[position - 1]){
            newString += insertCharacter; 
            newString += string[i];
        }
        else {
            newString += string[i];
        }  
    }
    return newString
}
console.log(conc('Goo morning',4,'d'))

/*4.
Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!” */
function delArticle(string, position){
    newString = '';
    for(i=0; i < string.length; i++){
        if(string[i] === string[position]){
            newString += string[i+1];
            i = i+1;
        }
        else {
            newString += string[i];
        }  
    }
    return newString;
}
console.log(delArticle('Goodd morning!',3))
/*5.
Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67] */

function delElement(array){
    var newArray = [];
    for (i=0; i < array.length; i ++){
        if ( i % 2 === 0){
            newArray += array[i] + ' ';
        }
    }
    return newArray;
}
console.log(delElement([3, 5, 1, 8, 90, -4, 23, 1, 67]))
/*6.
Write a function that replaces the elements of the given array between two positions 
with their doubled values. 
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]*/
function replace(array, index1, index2){
    newArray = [];
    for (i=0; i < array.length; i++){
        if (i === index1){
            newArray += array[i] * 2 + ' ';
        }
        else if (i === index2){
            newArray += array[i] * 2 + ' ';
        }
        else {
            newArray += array[i] + ' ';
        }
    }
    return newArray
}
console.log(replace([3, 5, 1, 8, 90, -4, 23, 1, 67],2,6))

/*7.Write a function that checks if a given object has a given property with the given value. 
Input: {x: 20, y: 30}, “x”, 20 
Output: true
Input: {x: 20, y: 30}, “z”, 20 
Output: false 
Input: {x: 20, y: 30}, “x”, 10 
Output: false */
function checkValue(x,y,g,d){
    var g; var d; var result = 'false'
        if (x === g === d || y === g === d){
            console.log('true')
        }
    return result
}
console.log(checkValue(20,30,'z',20))


/*8.Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true*/
var check = (function checkElement(array1,array2){
    var counter = 0;
    for(var i = 0; i < array1.length; i++){
        for (var j = 0; j < array2.length; j++){
            if(array1[i] === array2[j]){
                counter++;
                break;
            }
        }    
    }
    if (counter === array1.length){
        return console.log('true')
    }
    else {
        return console.log('false')
    }
})([3, 1, 4, 3, 5],[8, 9, 1, 11, 4, 3])

/*9.
Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]*/

var numberOfAInStrings = (function (string){
    var counterA = 0;
    for (i = 0; i < string.length; i++){
        if(string[i] === 'a' || string[i] === 'A'){
                counterA++;
        }
    }
    return counterA
});
var sortByNumberOfAppearances = (function(ArrayOfStrings){
    var newStrings;
    for(var i = 0; i < ArrayOfStrings.length; i++){
        for (var j = i + 1; j < ArrayOfStrings.length - 1; j++ ){
            if (numberOfAInStrings(ArrayOfStrings[i]) > numberOfAInStrings(ArrayOfStrings[j])) {
                newStrings = ArrayOfStrings[i];
                ArrayOfStrings[i] = ArrayOfStrings[j];
                ArrayOfStrings[j] = newStrings;
            }
        }
    }
    return ArrayOfStrings;
}
)(['apple', 'tea', 'amazing', 'morning', 'JAvAScript'])
console.log(sortByNumberOfAppearances)


/*10.
Write a function that prints out the date of the next day. 
Output:  25. 10. 2018. */


/*11.
Write a function that prints out the date of the previous day. 
Output:  23. 10. 2018. */

/*12.
Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output: 
78
111  
4
4321*/
function arrayAlign(array){
    newArray = [];
    for (var i = 0; i < array.length; i++ ){
        newArray += array[i] + '\n';
    }
    return newArray;
}
console.log(arrayAlign([78, 111, 4, 4321]))
