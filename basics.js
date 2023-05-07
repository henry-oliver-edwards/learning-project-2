// In TypeScript along with the properties, it also analyzes the types
// of the properties and makes a key pair value of the property name and type
//  In this example, we have explicitly defined the type of the object
//  in a key-pair fashion to make sure these types are kept consistent
var person = {
    name: "Henry",
    age: 24,
    hobbies: ['golf', 'boardgames']
};
// However you can also create a normal object and TypeScript will infer the types
var weather = {
    temperature: 23,
    humidity: 0.5,
    descriptor: 'sunny'
};
// The any keyword is a type that allows any type to be assigned to if
// it is a flexible type that can be used to get around the type checking.
// The array below is an example of an any array
// This is an array of strings only and if we give it a number, it will throw an error
var favouriteAnimals;
favouriteAnimals = ['dog', 'cat', 'bird'];
// To get around this, we can use the any type which allow any type to be assigned
// to it. This is not recommended as it defeats the purpose of TypeScript
var favouriteStatistics;
favouriteStatistics = ['pi', 3.14, 'e', 2.71, { person: 'Henry' }];
// Trying to access a property that doesn't exist will throw an error
// TypeScript analyzes the object and even guesses at the types of the properties
console.log(person);
console.log(person.age);
// Simple for loop in JavaScript, because of the type association of hobbies,
// we can use the string methods on the hobby variable
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
// Traditional for loop in JavaScript
for (var _b = 0, _c = person.hobbies; _b < _c.length; _b++) {
    var hobby = _c[_b];
    console.log(hobby);
}
