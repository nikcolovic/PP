/*Applications: constructor functions line 1 - 100

Create constructor functions with properties representing the following:
WebApp: name, url, technologies, licence, stars
MobileApp: name, platforms, licence, stars */

function WebApp (name, url, technologies, licence, stars){
        this.name = name;
        this.url = url;
        this.technologies = technologies;
        this.licence = licence;
        this.stars = stars;
} 
WebApp.prototype = Object.create(Object.prototype)
WebApp.prototype.constructor = WebApp;
var parkingManijak = new WebApp ('parkingManijak', 'https://www.parkingmanijak.rs', 'Angular', 'local', '4*')
console.log(parkingManijak);

function MobileApp (name, platforms, licence, stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
}
MobileApp.prototype = Object.create(Object.prototype);
MobileApp.prototype.constructor = MobileApp;
var parkingManijak = new MobileApp ('parkingManijak', 'Android', 'local', '4*')
console.log(parkingManijak);

/*
All web applications should inherit methods: 
getData which prints out all the information
reactBased which checks if one of the used technologies is React 
*/
WebApp.prototype.getData = function () {
    return this.technologies;
}
WebApp.prototype.printOut = function () {
    console.log(this.getData());
}
var isTechnologyReact = new WebApp('parkingManijak', 'https://www.parkingmanijak.rs', 'React', 'CC', '****');
console.log(isTechnologyReact);
    if(isTechnologyReact.technologies !== 'React') {
        console.log('App use another technology')
    } 
    else {
        console.log('App use React technology')
    }

/*
All mobile applications should inherit methods:
getData which prints out all the informations
forAndroid which checks if one of the platforms the application is developed for is Android*/
MobileApp.prototype.getData = function () {
    return this.platforms;
}
MobileApp.prototype.printOut = function () {
    console.log(this.getData())
}
var isDevelopedForAndroid = new MobileApp ('parkingManijak', 'Android', 'CC', '****');
console.log(isDevelopedForAndroid)
if(isDevelopedForAndroid.platforms !== 'Android') {
    console.log('App is developed for another platform')
} 
else {
    console.log('App is developed for Android platform')
}

/*
Both web and mobile applications should inherit methods:
isCCLicence  which checks if the licence of the application is CC (Creative Commons) 
like which increases the number of stars by one
showStars which prints out the number of stars 
*/
MobileApp.prototype.isCCLicence = function () {
    return this.licence;
}
MobileApp.prototype.printOutIsCCLicence = function () {
    console.log(this.isCCLicence())
}
var isCCLicence = new MobileApp ('parkingManijak', 'Android', 'CC', '****');
console.log(isCCLicence)
function showStars() {
    if(isCCLicence.licence === 'CC') {
        isCCLicence.stars = isCCLicence.stars + '*'
    return isCCLicence.stars;
    } 
}
showStars();
//console.log(isCCLicence.stars + '*')
console.log(isCCLicence)








// Classes extend Classes same exercise line 100 to the end of page

/*Applications:

Create constructor functions with properties representing the following:
WebApp: name, url, technologies, licence, stars
MobileApp: name, platforms, licence, stars */
class WebAppClass {
    constructor (name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
    }
} 

class MobileAppClass extends WebAppClass { 
    constructor (name, platforms, licence, stars) {
        super (name, licence, stars)
        this.platforms = platforms;
    }
}

/*
All web applications should inherit methods: 
getData which prints out all the information
reactBased which checks if one of the used technologies is React */
    
/* 
All mobile applications should inherit methods:
getData which prints out all the informations
forAndroid which checks if one of the platforms the application is developed for is Android

Both web and mobile applications should inherit methods:
isCCLicence  which checks if the licence of the application is CC (Creative Commons) 
like which increases the number of stars by one
showStars which prints out the number of stars */