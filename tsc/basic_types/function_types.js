"use strict";
//function_types.ts
//Function Types are types that describe the parameters of a functions.
//They are created with arrow function notations () => 
function divide(n1, n2) {
    let q = n1 / n2;
    return q;
}
let getQuotient;
//getQuotient is a type that can handle a function that returns a number
getQuotient = divide;
//the divide function fits perfectly for the new Function Type getQuotient
console.log(getQuotient(20, 30));
