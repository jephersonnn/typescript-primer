// enums.ts
var Rules;
(function (Rules) {
    Rules[Rules["ADMIN"] = 0] = "ADMIN";
    Rules[Rules["READ_ONLY"] = 1] = "READ_ONLY";
    Rules[Rules["AUTHOR"] = 2] = "AUTHOR";
})(Rules || (Rules = {}));
; //making a custom type with enums
var person = {
    name: 'Jeff',
    age: 22,
    hobbies: ['Writing', 'Sleeping'],
    role: [1, 'author'],
    rules: Rules.ADMIN
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person.rules);
