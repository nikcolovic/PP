/*Employees and Managers

Create constructor functions with properties representing the following:
Person: name, surname
Employee: inherits Person and has job and salary
Developer: inherits from Employee and has specialization
Manager: inherits from Employee and has department*/

class Person {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
var person = new Person ('Dijana', 'Radojevic')
console.log(person);

class Employee extends Person {
    constructor (name, surname, job, salary){
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    /*getData which returns the name, surname and salary 
getSalary which prints out the salary
increaseSalary which increases the salary by 10%*/
    getData() {
        return this.name + " " + this.surname + "," + this.salary;
    }
    getSalary() {
        return this.salary;
    }
    increaseSalary(){
        this.salary = this.salary*1.1;
        return this.salary;  
    }
}
var employee = new Employee ('Dijana', 'Radojevic', 'JS developer', 500000)
console.log(employee);
console.log(employee.getData());
console.log(employee.getSalary());
console.log(employee.increaseSalary());

/*
All developers should inherit method:
getSpecialization which prints out the name of the specialization*/

class Developer extends Employee {
    constructor (name, surname, salary, specialization){
    super(name, surname, 'Developer', salary);
    this.specialization = specialization;
    }
    getSpecialization(){
        return this.specialization;
    }
}
var developer = new Developer ('Dijana', 'Radojevic', 500000, 'functions')
console.log(developer);
console.log(developer.getSpecialization())

/*
All managers should inherit methods:
getDepartment which prints out the name of the department
changeDepartment which sets the department value on the given value*/

class Manager extends Employee {
    constructor (name, surname, salary, department) {
    super(name, surname, 'Manager', salary);
    this.department = department;
    }
    getDepartment () {
        return this.department;
    }
    changeDepartment (department) {
        this.department = department;
        return department;
    }
}
var manager = new Manager ('Dijana', 'Radojevic',  500000, 'Team Nation')
console.log(manager);
console.log(manager.getDepartment())
console.log(manager.changeDepartment('Nordeus'))






 
 