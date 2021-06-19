/*
Employees and Managers

Create constructor functions with properties representing the following:
Person: name, surname
Employee: inherits Person and has job and salary
Developer: inherits from Employee and has specialization
Manager: inherits from Employee and has department*/
function Person (name, surname){
    this.name = name;
    this.surname = surname;
}
Person.prototype = Object.create(Object.prototype);
Person.prototype.constructor = Person;
var mikaEmployer = new Employee('Mika', 'Mikic', 'VKV rudar', 500000)
console.log(mikaEmployer);



function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
var peraEmployer = new Employee('Pera', 'Peric', 'VKV rudar', 500000)
console.log(peraEmployer);

function Developer (name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Employee;
var zoranDeveloper = new Developer ('Zoran', 'Zoric', 'VKV rudar', 500000, 'braveAction')
console.log(zoranDeveloper);

function Manager(name, surname, job, salary, department) {
    Employee.call(this,name, surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Manager.prototype);
Manager.prototype.constructor = Manager;
var markoMarkovic = new Manager ('Marko', 'Markovic', 'VKV rudar', 500000, 'tunel')
console.log(markoMarkovic);

/*
All developers should inherit method:
getSpecialization which prints out the name of the specialization */

Developer.prototype.getSpecialization = function () {
    return this.specialization;
}
Developer.prototype.printOut = function () {
    console.log(this.getSpecialization());
}
var mirkoDeveloper = new Developer('Mirko', 'Nadj', 'JS developer', 580000, 'Loops');
console.log(mirkoDeveloper.specialization);


/*
All managers should inherit methods:
getDepartment which prints out the name of the department
changeDepartment which sets the department value on the given value*/
Manager.prototype.getDepartment = function () {
    return this.getDepartment;
}
Manager.prototype.printDepartment = function () {
    console.log(this.getDepartment());
}
var dusanStankovic = new Manager ('Dusan', 'Stankovic', 'JS developer', 550000, 'Nordeus')
console.log('Dusan Stankovic works in JS development department in company: ' + dusanStankovic.department)

Manager.prototype.changeDepartment = function() {
    return this.changeDepartment;
}
var dusanStankovic = new Manager ('Dusan', 'Stankovic', 'JS developer', 550000, 'Endava')
console.log('Dusan Stankovic works in JS development department in company: ' + dusanStankovic.department)
/*
All employees should inherit methods:
getData which returns the name, surname and salary 
getSalary which prints out the salary
increaseSalary which increases the salary by 10% 
*/
Employee.prototype.getData = function () {
    return this.getData;
}
Employee.prototype.printData = function () {
    console.log(this.getData());
}
var sasaAndjelkovic = new Employee ('Sasa', 'Andjelkovic', 'JS master', 550000)
console.log(sasaAndjelkovic.name + ' ' + sasaAndjelkovic.surname + ' ' + sasaAndjelkovic.salary);

Employee.prototype.getSalary = function () {
    return this.getSalary();
}
Employee.prototype.printSalary = function () {
    console.log(this.getSalary());
}
var predragBelos = new Employee ('Predrag', 'Belos', 'JS king', 1000000)
console.log('Predrag\'s salary is: ' + predragBelos.salary);
//????????????
Employee.prototype.increaseSalary = function () {
    return salary * 1.1;
}
//????????????
console.log('Predrag\'s salary is: ' + predragBelos.salary*1.1)