// in almost js everything is an object
/**2 types of objects 
 * primitives
 * everything else
*/

// what is OOP?
/**
 * objects interacting with one anotehr through methods and properties.
 * used to store data, stucture applications into modules and keeping code clean.
 * rather than creating an object, yo ucan create blueprints to create many objects or descendatas
 * In other programming langues, we call these BLUEPRINTS CLASSES but in JS we call them CONSTRUCTORS
 * Inheritance - when one object is based on another object. When one object gets acess to another object's properties and methods.
    *This allows us to write less code.  
 *Prototype property of an object is where we store child objects. So for object Person, the protype will be object John.
 */

/* Creating objects using function constructor*/

var john = {
    name: "John",
    yearOfBirth: 1990,
    Job: "Developer"
}

//  easier way to do this, use function constructors, name of variable is always capitalized
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//add a new property to Person prototype function
Person.prototype.greet = function () {
    console.log(`Hello my name is ${this.name} and I am a ${this.job}. I was born in the year ${this.yearOfBirth}`);
}

var rex = new Person("rex", 1990, "developer");
rex.hobby = "fish";
var john = new Person("John", 1990, "teacher");

rex.greet();
john.greet();

// attaching methods to the object's prototype property is what creates the inheritance for the descendants