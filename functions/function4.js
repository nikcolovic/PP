/*Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no*/

function checkElement(array,e){
    var found = 'no';
    for(i = 0; i < array.length; i++){
            if(e === array[i]){
                found = 'yes'
                break;
            }
    }
    return found;
}
console.log(checkElement([5, -4.2, 18, 7, 15, 18, 159, 978],7))



/*

2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */

function multPositive(array){
    newArray = [];
    for( i=0; i<array.length; i++){
        if (array[i] > 0) {
            newArray[i] = array[i]*2
        }
        else {
            newArray[i] = array[i];
        }
    }return newArray
}
console.log(multPositive([-3, 11, 5, 3.4, -8]))


/*3. Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/
function findMinmum(array){
        var min; 
        var index;
    for( var i = 0; i < array.length - 1; i++) {
        if(array[i] < array[i+1]){
            min = array[i]
            index = i
        }
        else {
            min = array[i+1]
            index = i + 1
        }
    }
    return min + ' je minimum niza a indeks je ' + index;
}
console.log(findMinmum([4, 2, 2, -1, 6, -3]))

/*4.Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2*/
function secondSmallest(array){
    var min = array[0]; 
    var nextMin;
    for(i=1; i < array.length; i++){
        if(array[i] < min){
            nextMin = min;
            min = array[i];
        }
        else if(array[i] < nextMin){
            nextMin = array[i];
        }
    }
    return nextMin
}
console.log(secondSmallest([4, 2, 2, -1, 6, 1]))


/* 5.
Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/
function sumPositive(array){
    var sum = 0;
    for(i=0; i < array.length; i ++){
        if (array[i] > 0) {
            sum = sum + array[i] 
        }
    }
    return sum
}
console.log(sumPositive([3, 11, -5, -3, 2, 10]))

/*6.
Write a program that checks if a given array is symmetric. 
An array is symmetric if it can be read the same way 
both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/
function simetric(array){
    for (i=0; i < array.length; i ++){
        if (array[i] !== array[array.length-1-i]){
            return 'The array isn’t symmetric.';
        }
        else {
        return 'The array is symmetric.'
        }
    }
}
console.log(simetric([3, 4, 12, 8]))

/* 7.
Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

function interwin(array1,array2){
    var newArray = [];
    for(var i=0; i < array1.length; i++){
        newArray[newArray.length] = array1[i];
        newArray[newArray.length] = array2[i];
    }
    return newArray
}
console.log(interwin([4, 5, 6, 2], [3, 8, 11, 9]))


/*8.
Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

function concatenate(array1,array2){
    newArray = [];
    for(i=0; i < array1.length; i++){
        newArray[i] = array1[i];
    }
    for(j=0; j < array2.length; j++){
        newArray[array1.length + j] = array2[j];
    }
    return newArray
}

console.log(concatenate([4, 5, 6, 2], [3, 8, 11, 9]))

/*9.
Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */

function delElement(array,e){
    newArray = [];
    for(i=0; i<array.length; i++){
        if(e !== array[i]){
            newArray[newArray.length] = array[i];
        }
    }
    return newArray
}
console.log(delElement([4, 6, 2, 8, 2, 2],6))
/*10.
Write a program that inserts a given element e on the given position p in the array a. 
If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

function insertElement(array,insert,position){
    newArray = [];
    if (position < array.length){
        for (i=0; i < array.length && i <= position; i++){
            if(i === position){
            newArray[i] = insert
            }
            else {
                newArray[newArray.length] = array[i];
            }   
        }
        for (j = 0; j < array.length - position; j++){
                newArray[newArray.length] = array[position+j]
        }
        return newArray
    }
    else{
        console.log('Error, array is too short to enter input in this position')
    }
}
console.log(insertElement([2, -2, 33, 12, 5, 8],78,3))

