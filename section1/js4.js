/************************ 
 * Functions Sdtatements and Expressions
*/

// function declaration
function whatDoYouDo(job, firstName) { }

// function expression
var whatDoYouDo2 = function (job, firstName) {
    switch (job) {
        case "teacher":
            return firstName + " teaches kids how to learn"
        case "driver": 
            return firstName + " teaches kids how to drive"
        case "designer": 
            return firstName + " teaches kids how to design"
        default: 
            return firstName + " is unemployed"
    }
}

console.log(whatDoYouDo2("fisher","James"));
