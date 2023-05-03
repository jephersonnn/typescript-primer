//arrays.ts
var person = {
    name: 'Jeff',
    age: 22,
    hobbies: ['Writing', 'Sleeping']
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
