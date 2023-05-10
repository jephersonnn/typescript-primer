"use strict";
//arrays_tuples.ts
const person = {
    name: 'Jeff',
    age: 22,
    hobbies: ['Writing', 'Sleeping'],
    role: [1, 'author'] //key with tuples
};
console.log(person.name);
//you can change values on tuples
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
