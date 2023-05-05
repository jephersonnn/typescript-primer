//callbacks_function_types.ts


function multiply(n1: number, n2: number, cb: (num: number) => void){
    let p = n1 * n2;
    cb(p); 
    //the result or p gets passed as a variable of a callback, where this can be utilized 
    //on the line where this function is called
}

console.log(multiply(20,30, (product) => {
    console.log(product)
}))
  