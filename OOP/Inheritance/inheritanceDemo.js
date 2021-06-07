// person constructor function
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  Person.prototype.fullName = function () {
    return this.name + ' ' + this.surname;
  };
  Person.prototype.printInfo = function () {
    console.log(this.fullName());
  };
  var pera = new Person('Pera', 'Peric');
  var john = new Person('John', 'Peric');
  //inheritance (nasledjivanje)
  function Programmer(name, surname, favouriteLanguage) {
    Person.call(this, name, surname);
    this.favouriteLanguage = favouriteLanguage;
  }
  Programmer.prototype = Object.create(Person.prototype);
  Programmer.prototype.constructor = Programmer;
  var peraProgramer = new Programmer('pera', 'peric', 'js');
  console.log(peraProgramer);
  function BackEndProgrammer(name, surname, favouriteLanguage, database) {
    Programmer.call(this, name, surname, favouriteLanguage);
    this.database = database;
  }
  BackEndProgrammer.prototype = Object.create(Programmer.prototype);
  BackEndProgrammer.prototype.constructor = BackEndProgrammer;
  var peraBProgramer = new BackEndProgrammer('pera', 'peric', 'js', 'mongoDb');
  console.log(peraBProgramer);