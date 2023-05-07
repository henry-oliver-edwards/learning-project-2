// Typescript is able to analyse the function and infer the return type
// However we can also explicitly define the return type of the function by using colon after the arguments
function add(n1: number, n2: number): number {
    return n1 + n2
}

// This function doesn't return anything, so it is void, a void function returns nothing
function printResult(num: number): void {
    console.log('Result: ' + num)
}

printResult(7);
// If you try to assign a variable to a void function, it will be undefined
console.log(printResult(7));

// This is an alias of a function that we have assigned to a variable
// However because we only have the details that it is a function it could be
// referring to any function, even ones that return void
let myAdd: Function = add
console.log(myAdd(5, 5));

// This is a function type, it is a type that describes a function
// it also takes allows us to assign certain types to the arguments
let myAdd2: (a: number, b: number) => number;

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
}

addAndHandle(10, 20, (result)=>{
    console.log(result)
})