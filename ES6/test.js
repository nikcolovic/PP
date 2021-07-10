var a = 34;
function transform (a) {
   
    a = a*2;
}
transform (a);
console.log(a);

var mondayToDo = {
    activity: 'do the dishes',
    song: 'lalalal',
    sing: function () {
        console.log(this.song);
    }
};
var tuesdayToDo = {
    activity: 'do the loundary',
    song: 'ooooo',
}

mondayToDo.sing.call(tuesdayToDo);

var result = Array.prototype.indexOf.call([1,3,5,2,11],3)
console.log(result)


var a = [2,3,4,5]
var b = [2,3,4,5]
console.log(a === b)

var coffee = 'espresso'; 
function orderCoffee () {
    console.log(this.coffee)
}
orderCoffee();

var result;
result = String.prototype.concat.call("abc","ABC")
console.log(result)

var obj = { x:5, y:13};
console.log(obj.z);

var obj = Object.create({ product: 'mug'})
obj.color = 'red';
obj.product = 'teacup';
console.log(obj.product);

Object.prototype.day = 'MOnday'
var plan = {activity: 'JS codding', day: 'always'};
console.log(plan.day);

'usestrict';
var obj = {x:5, y:13};
obj.z = 20;
console.log(obj);