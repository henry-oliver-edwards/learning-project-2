let userInput: unknown;
let userName: string;

userInput = 5;
userName = 'Henry';

if (typeof userInput == 'string') {
    userName = userInput
}

// The never type is used when a function will never return anything
// This is because it will throw an error, or it will never finish executing
// These types of functions are useful for reuse in other parts of the code
// instead of just making a new error function every time
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}

generateError('An error occurred!', 500)
