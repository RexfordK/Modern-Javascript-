/**************************** */
//falsy values: undefined, null, 0, " ", NAN
//all these values ^ will be converted to false when evaluated in a true false condition.

var height;
height = 23;

if(height || height == 0) {
    console.log("Variable is defined", height);
} else {
    console.log("The variable has NOT been defined");
}

// Equality operators
if (height == "23") {
    console.log("The == operator does type coercion!");
}
if (height === "23") {
    console.log("The === operator does not type coercion!");
}