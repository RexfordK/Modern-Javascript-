// Object.create
// define an object then create a new one based off that prototype

// var personProto = {
//     greet: function () {
//         console.log(`Hello my name is ${this.name} and I am a ${this.job}. I was born in the year ${this.yearOfBirth}`);
//     }
// }

// var john = Object.create(personProto);

// Primitives vs Objects
// a big difference betwene primitives is that variables containing primitives hold their methods inside the primitive data
// variables with objects do not actually contain the object but instead contains a copy of the the object, a reference

var a = 23;
var b = a;
console.log(a);
console.log(b);

var obj1 = {
    name: "rex",
    age: 26
}

obj2 = obj1; //obj1{}
obj1.age = 30;
console.log(obj2);

//functions
var age = 27; 
var obj3 = {
    name: "Jonas",
    city: "Lisbon"
};


console.log("This is original object 3");
console.log( obj3);
function change (a, b ) {
    a = 38;
    b.city = "San Fransisco";
}

change (age, obj3);
console.log( obj3);