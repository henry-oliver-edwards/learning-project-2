# This is my learning repository from a course I took on Udemy for types

## How to run this project
Needed:
A version of node
-   v19.9.0 used in this project

A package manager
-   npm (usually comes with node)
-   yarn (I used yarn for this project)
-   pnpm (Relatively new, uses system links to save space)

A TypeScript compiler
-   tsc npm install -g typescript
-   yarn add global typescript
-   pnpm add -g typescript

## This set of documents goes over all the basics of typescript
Including:
1. Basic types ('number', 'string', 'boolean', etc) : **_in app.ts_**
2. Arrays and types of arrays, arrays can have a type as well, of you only wanted
   an array of strings, you could type `string[]` : **_in basics.ts_**
3. Objects are also types in Typescript if you make a regular object, TypeScript will
   automatically infer the type of the object, but you can also explicitly type it with
   an object before the object value; this is done with a colon and curly braces
   `: {name: string, age: number}` : in basics.ts
4. ENUMS are another TypeScript only feature, this is where you have a constant, and
   you want to don't want to keep making variables for these constants, enums prevent
   having to do this a just manage one structure and reference that structure : **_in enums.ts_**
5. Functions and return types, most functions will return some sort of value, this can
   be referenced with a type after the function parameters,
   `function add(n1: number, n2: number): number { return n1 + n2; }`.
   However, some functions will not return anything; these are called void functions, and instead
   of a type being at the end of a function, the void keyword is used.We can also
   alias functions in TypeScript where we assign a new variable to an existing function.This
   should be taken with caution though because our new function has to inherit the old type return of
   the old function.This can be a complicated concept, so an example is given below, they
   basically act as function definitions or prototypes, example [here](#function-aliasing-example) : in **_functions.ts_**

6. Unions are a way to have a variable be more than one type, this is done with the pipe
   operator `|`, it allows you to also use custom types or strings in these unions, this can simplify
   checking for types in functions and making logic easier and code more concise : in **_unions.ts_**

7. The last 2 types in TypeScript are unknown and never types, the unknown type is very similar to the 
   any type, unknown types can be reassigned to any values. This type is useful when you don't know what
   you want your variable to be, but you want to make sure it is a certain type before you use it. The never
   type is used when you know a function will never return anything, this is useful for functions that throw
    errors or functions that have an infinite loop. : in **_unknown-never-type.ts_**

##### Function Aliasing Example
```typescript
  function add(n1: number, n2: number): number {
    return n1 + n2
}

// This is an alias of a function that we have assigned to a variable
let myAdd: Function = add

let myAdd2: (a: number, b: number) => number;

//This line of TypeScript code defines a variable called myAdd2 with a specific function type. 
// The function type indicates that myAdd2 should be assigned a function that takes two parameters, both of type number, and returns a value of type number.

let myAdd2: (a: number, b: number) => number;

myAdd2 = function(a: number, b: number): number {
    return a + b;
};

console.log(myAdd2(10, 20)); // Output: 30

```
