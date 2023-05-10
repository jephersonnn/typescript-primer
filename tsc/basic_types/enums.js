"use strict";
// enums.ts
var Rules;
(function (Rules) {
    Rules[Rules["ADMIN"] = 0] = "ADMIN";
    Rules[Rules["READ_ONLY"] = 1] = "READ_ONLY";
    Rules[Rules["AUTHOR"] = 2] = "AUTHOR";
})(Rules || (Rules = {}));
; //making a custom type with enums
const person = {
    name: 'Jeff',
    age: 22,
    hobbies: ['Writing', 'Sleeping'],
    role: [1, 'author'],
    rules: Rules.ADMIN //a value from the specified enum
};
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
console.log(person.rules);
