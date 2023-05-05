//unions.ts
function combine(input1, input2) {
    //union types allow a variable to handle either of the assigned types
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine(5, 5));
console.log(combine('Hello ', 'World'));
