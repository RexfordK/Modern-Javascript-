// passing functions as arguments
var years = [1993, 2012, 2009, 2005, 1998];

function arrayCalc(arr, calc) {
    var arrRes = [];
    for (let x = 0; x < arr.length; x++) {
        arrRes.push(calc(arr[x]));
    }
    return console.log(arrRes);
}

function calculateAge (el) {
    return 2018 - el;
}

// callback functions are called later
arrayCalc(years, calculateAge);