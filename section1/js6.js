// coding challange
var person =  function(firstName,lastName,height, mass){
    this.firstName = firstName;
    this.lastName = lastName;
    // height in inches
    this.height = height;
    // mass in kg
    this.mass = mass;
    this.BMICalc = function () {
        return (
            "BMI for " +  this.firstName + " " + this.lastName + " is " + 
            (this.mass / Math.pow(height, 2)).toFixed(3));
    }
}

var john = new person("john","smith",62,150);
var mark = new person("mark","twain",80,190);
console.log(john);
console.log(mark);
console.log(john.BMICalc());
console.log(mark.BMICalc());
