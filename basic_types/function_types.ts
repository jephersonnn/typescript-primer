//function_types.ts
//Function Types are types that describe the parameters of a functions.
//They are created with arrow function notations () => 

function divide(n1: number, n2: number): number{
    let q = n1 / n2;
    return q;
}

let getQuotient: (a: number, b: number) => number; 
//getQuotient is a type that can handle a function that returns a number

getQuotient = divide;
//the divide function fits perfectly for the new Function Type getQuotient

console.log(getQuotient(20,30))
  