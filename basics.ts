// In TypeScript along with the properties, it also analyzes the types
// of the properties and makes a key pair value of the property name and type

//  In this example, we have explicitly defined the type of the object
//  in a key-pair fashion to make sure these types are kept consistent

const person: {
    name: string;
    age: number;
    hobbies: string[];
    // Defining a tuple type
    job: [string, string];
} = {
    name: "Henry",
    age: 24,
    hobbies: ['golf', 'boardgames'],
    // Typescript will automatically infer the type of the object to be an array
    // of strings because of the values we have assigned to it to be a tuple
    job: ['developer', '2 years']
}

// However you can also create a normal object and TypeScript will infer the types
const weather = {
    temperature: 23,
    humidity: 0.5,
    descriptor: 'sunny'
}


// The any keyword is a type that allows any type to be assigned to if
// it is a flexible type that can be used to get around the type checking.
// The array below is an example of an any array

// This is an array of strings only and if we give it a number, it will throw an error
let favouriteAnimals: String[];
favouriteAnimals = ['dog', 'cat', 'bird'];

// To get around this, we can use the any type which allow any type to be assigned
// to it. This is not recommended as it defeats the purpose of TypeScript
let favouriteStatistics: any[];
favouriteStatistics = ['pi', 3.14, 'e', 2.71, {person: 'Henry'}];

// Trying to access a property that doesn't exist will throw an error
// TypeScript analyzes the object and even guesses at the types of the properties
console.log(person)
console.log(person.age)

// Simple for loop in JavaScript, because of the type association of hobbies,
// we can use the string methods on the hobby variable
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

// Traditional for loop in JavaScript
// However in TypeScript we can access all the string methods on the hobby variable
// because we have defined the type of the hobbies array to be a string array
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

