/************************
 * Objects and properties
 * in objects we define key value pairs
 * we use objects group together variables that belong together but have no particular order
 */

 var john = {
     firstName: "John",
     lastName: "Smith",
     birthYear: 1990,
     family: ["Jane", "Mark", "Bob", "Emily"],
     fish: {
         trout: "true",
         salmon: "false"
     },
     isMarried: false,
     Job: "teacher",
     calcAge: function () {
         this.age =  2018 - this.birthYear;
         this.hobby = "gaming";
     }
 } 
john.calcAge();
console.log(john);

