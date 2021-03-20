//var m=4;
//var n=5;

//var result = m+n;
//formiranje funkcije

//Declaration of Function
function sum(m,n) {
    var result = m+n;
    return result;
}
// bez returna vraca undefined rezultat
// invoke function - calling of function

var m=4;
var n=5;
var result = sum(m,n);

console.log(result)

/*
function isArraySym (array) {

    var isSym = true;
     //krecemo iz predpostavke da jeste simetrican
for (var start = 0, end = array.length - 1; start < end; start++, end--){
    if(array[start] !== array[end]) {  //uslov nije jednako
        isSym = false;
    }
}
return isSym
}

var result = isArraySym ([1, 3, 1]) */