//basics_types.ts
function add(n1: number, n2: number){

    // if (typeof n1 !== 'number || typeof n2 !== 'number'){
    //     throw new Error('Incorrect input!');
    // }
    console.log(typeof(n1)) 
    return n1 + n2; //specify the core type of the parameters
}

const number1 = 5;
const number2 = 2.9;
const result = add(number1, number2);
console.log(result);

