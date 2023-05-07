// Core data types
// Adding types to the arguments will catch this error of
// passing a string instead of a number
// In a later iteration of this function. We have added a boolean argument
// that creates a new if loop, incorporating the boolean argument. However,
//  the function can now return undefined (e.g. returning nothing)
function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }
    var result = n1 + n2;
    if (showResult) {
        //        console.log(phrase + n1 + n2);
        //        If we use this method because phrase is a string and n1 and n2 are numbers,
        //        they will be concatenated instead of added, however, now that we have introduced
        //         a new variable called result which makes the calculation mathematical anyway,
        //         so we can use the result instead with the phrase since we don't care if result
        //         is cast to a string
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
// const number1 = 5;
// Now that number1 is a string number2 will also be treated as a string,
// so when the add function is called, they are concatenated instead of added
// const number1 = '5';
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
