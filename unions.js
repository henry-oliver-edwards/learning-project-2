// A union type allows us to combine multiple types into one type.
// This is similar to overloading functions in other languages
// we can do a runtime check to see if the type is a string or a number
function combine(input1, input2, resultConversion) {
    var result;
    if (resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// This function uses a type literal combining the two types into one, a string and a number
// this unison allows us to check if the 2 variables are numbers, but then we can overload
// the function to check if the resultConversion is a string, if it is, we can return a string
// or a number depending on the result of this union
function combineUnions(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combineUnions(30, 26, 'as-number'));
console.log(combineUnions('30', '26', 'as-number'));
// Here we have created types to clean up the code and make it more readable
// as well as making it easier to understand what the function is doing
function combineType(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
