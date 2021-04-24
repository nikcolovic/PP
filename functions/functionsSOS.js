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
