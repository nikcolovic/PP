/*1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/

function fortuneTeller(numberOfChildren, partnerName, geoLocation, jobTitle) {
    var result = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnerName + ' with ' + numberOfChildren + ' kids. '
    return result
}
console.log(fortuneTeller(2,' Maja ', ' Belgrade ', 'Touroperator Manager' ))
console.log(fortuneTeller(5,' Maja ', ' Cephalonia ', 'Programer' ))
console.log(fortuneTeller(3,' Maja ', ' Cuba ', 'Trumpet player & Local coctail expert' ))

/*2. You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.

Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.*/

function calculateDogAge(humanAge){
    dogAge = 7 * humanAge;
    return dogAge;
} 
console.log('Your doggie is ' + calculateDogAge(10) + ' years old in dog years! ')
console.log('Your doggie is ' + calculateDogAge(7) + ' years old in dog years! ')
console.log('Your doggie is ' + calculateDogAge(3) + ' years old in dog years! ')


/*3. Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.

Bonus: Accept floating point values for amount per day, and round the result to a round number. */
function calculateSupply (age, amountPerDay) {
    var maxAge = 99;
    var iNeed = (maxAge - age) * (365 * amountPerDay)
    var result = "You will need " + iNeed + ' to last you until the ripe old age of ' + maxAge + ' years. '
    return result
}
console.log(calculateSupply(33,5))
console.log(calculateSupply(55,3))
console.log(calculateSupply(98,10))


/* 4. It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit: (0°C × 9/5) + 32 = 32°F
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius: (32°F − 32) × 5/9 = 0°C
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."*/

var tempC = 20;
function celsiusToFahrenheit(tempC){
    result = tempC * 9/5 + 32;
    return result;
}
console.log(tempC + ' °C ' + 'is ' + celsiusToFahrenheit(tempC) + ' °F. ')

var tempF = 100;
function fahrenheitToCelsius(tempF){
    result = (tempF - 32) * 5/9;
    return result;
}
console.log(tempF + ' °F ' + 'is ' + fahrenheitToCelsius(tempF) + ' °C. ')


