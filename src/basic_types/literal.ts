//literal.ts
//Literals can be used to implement type safety

function combine(
  input1: number | string,
  input2: number | string,   //union types allow a variable to handle either of the assigned types
  resultConversion: 'as-number' | 'as-text' //resultConversion can only hold these values
)
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   if (resultConversion === "as-number") {
//     return +result; //converts the result to a number if they are not of type number
//   } else {
//     return result.toString(); //converts the result to a string if they are not of type string
//   }


console.log(combine(5, 5, 'as-number'));
console.log(combine("Hello ", "World", 'as-text'));
