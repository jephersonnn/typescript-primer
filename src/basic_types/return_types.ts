//return_types.ts

function printResult(n1: number, n2: number): void{
    console.log('Result: ' + (n1+n2))
    //void return types mean that your function does not return anything
}

function subtract(n1: number, n2: number): string{
    let diff = n1 - n2;
    let result = ''
    if (diff < 0) {
        result = 'The difference is negative'
    }
    else{
        result = 'The difference is zero or positive'
    }
    console.log(diff)
    return result
}

printResult(10, 20)
console.log(subtract(20,30))
  