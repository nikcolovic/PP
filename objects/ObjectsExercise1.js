/*1
Create an object that represents your favourite coffee. 
Please include coffee name, strength, flavour, milk, sugar, … everything you like!*/
var myCoffee = {
    name: 'Arabica',
    strength: 'stronger than strong',
    flavor:  'vanila',
    milk: 'yes',
    sugar: 'no',
}
console.log(myCoffee)
/*2
Create an object that represents your favourite movie. 
Please include title, actors, director, genre, popularity. */
var  myFavoriteMovie = {
    title: 'Night on Earth',
    actors: 'Roberto Benini ... ', 
    direcctor: 'Wim Wenders',
    genre: 'Comedy/Drama',
    popularity: 'Average',
}
console.log(myFavoriteMovie)

/*3
Write a function that creates an object that represents a project. 
Each project is described by: description,  programming language, git repository, 
boolean status that says if the project is in development or not. 
Add a method that prints out the project's repository,  
a method that checks if the project is written in JavaScript as well as a 
method that checks if the project is in development or not. */

function createProject (desc, progLang, gitUrl, devStatus){
    return {
    description : desc,
    programingLanguage : progLang,
    gitRepository : gitUrl,
    developmentStatus : devStatus,
    printRepository() {
        return gitUrl;
    },
    isJavaScript: function () {
        return progLang === 'Java Script';
    },
    isInDevelopment() {
        return devStatus;
    }
    }
}
var project = createProject('firstProject','Java Script','https://github.com/nikcolovic', true)
console.log(project);
project.printRepository();
console.log(project.printRepository());
project.isJavaScript();
console.log(project.isJavaScript());
project.isInDevelopment();
console.log(project.isInDevelopment());

// nove kombinacije funkcija this.

function CreateProject (desc, progLang, gitUrl, devStatus){
    
    this.description = desc,
    this.programingLanguage = progLang,
    this.gitRepository = gitUrl,
    this.developmentStatus = devStatus,
    this.printRepository = function () {
        return gitUrl;
    }
    this.isJavaScript = function () {
        return progLang === 'Java Script';
    }
    this.isInDevelopment = function () {
        return devStatus;
    }
}

var project = new CreateProject('firstProject','Java Script','https://github.com/nikcolovic', true)
console.log(project);
project.printRepository();
console.log(project.printRepository());
project.isJavaScript();
console.log(project.isJavaScript());
project.isInDevelopment();
console.log(project.isInDevelopment());


/*4
Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name,
type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients. */

function createRecipe (name,cuisine, complex, ingArr, prepTime, instr) {
    return {
        recipeName: name,
        typeOfCuisine: cuisine,
        complexity: complex,
        listOfIngredients: ingArr,
        preparationTime: prepTime,
        preparationInstructions: instr,
        allIngredients() {
            return ingArr;
        },
        lengthOfPreparation() {
            if(prepTime <= 15){
                return 'Preparation length is less than 15 minutes'
            }
            else {
                return 'Preparation length is more than 15 minutes'
            }
        },
        /*newTypeOfCuisine() {
            cuisine = '';
            if(typeOfCuisine = 'sweet') {
           cuisine = 'sweet'}
           return cuisine;
        },*/
        deleteIngredient(){
            var param = '3 eggs';
            var newIngArr = [];
            for(var i = 0; i < ingArr.length; i++){
                if (param !== ingArr[i]){
                    newIngArr[newIngArr.length] = ingArr[i]
                }
            }
            return newIngArr;
        }
    }
}
var culinaryRecipe = createRecipe('Proja','Salty', '3', ['500g flour', '3 eggs', 'cheese', 'bacon'], 35, 'Put the mix of ingredients in kitchen range on 180 degrees for a 35 minutes')
console.log(culinaryRecipe);
culinaryRecipe.allIngredients();
console.log(culinaryRecipe.allIngredients());
culinaryRecipe.lengthOfPreparation();
console.log(culinaryRecipe.lengthOfPreparation());
culinaryRecipe.newTypeOfCuisine;

culinaryRecipe.deleteIngredient();
console.log(culinaryRecipe.deleteIngredient());





// function that delete given element from array
/*var ingArr = ['500g flour', '3 eggs', 'cheese', 'bacon']
function deleteIngredient(param){
    var param = '3 eggs';
    var newIngArr = [];
    for(var i = 0; i < ingArr.length; i++){
        if (param !== ingArr[i]){
            newIngArr[newIngArr.length] = ingArr[i]
        }  
    }
    return newIngArr;
}
console.log(deleteIngredient('3 eggs'));*/


function CreateRecipe (name,cuisine, complex, ingArr, prepTime, instr) {
    
        this.recipeName = name,
        this.typeOfCuisine = cuisine,
        this.complexity = complex,
        this.listOfIngredients = ingArr,
        this.preparationTime = prepTime,
        this.preparationInstructions = instr,
        this.allIngredients = function (){
            return ingArr;
        }
        this.lengthOfPreparation = function(){
            if(prepTime <= 15){
                return 'Preparation length is less than 15 minutes'
            }
            else {
                return 'Preparation length is more than 15 minutes'
            }
        },
        this.changeTypeOfCuisine = function(newType) {
            
            this.typeOfCuisine = newType;
        }
        this.deleteIngredient = function(){
            var param = '3 eggs';
            var newIngArr = [];
            for(var i = 0; i < ingArr.length; i++){
                if (param !== ingArr[i]){
                    newIngArr[newIngArr.length] = ingArr[i]
                }
            }
            return newIngArr;
        }
}

var proja = new CreateRecipe('Proja','Serbian', '3', ['500g flour', '3 eggs', 'cheese', 'bacon'], 35, 'Put the mix of ingredients in kitchen range on 180 degrees for a 35 minutes');
console.log(proja.allIngredients())
console.log(proja.lengthOfPreparation())
console.log(proja.changeTypeOfCuisine())
console.log(proja.deleteIngredient())