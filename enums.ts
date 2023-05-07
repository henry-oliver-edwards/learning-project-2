// Recreating the person object from the previous example

// This is an example of an enum which is a custom type that allows us to
// assign constant values to a variable, you can also assign your own values
// you don't have to stick to the convention of 0, 1, 2, 3, etc. You can even
// use strings as values
enum Role { ADMIN, READ_ONLY=2, AUTHOR= 'AUTHOR' }

const person = {
    name: "Henry",
    age: 24,
    hobbies: ['golf', 'boardgames'],
    role: Role.ADMIN
}