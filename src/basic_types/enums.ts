// enums.ts
enum Rules {ADMIN, READ_ONLY, AUTHOR}; //making a custom type with enums

const person: {
    name: string,
    age: number,  //key name and specifying the type of each key
    hobbies: string[], //an array that handles string elements. you can use any[] to handle any type
    role: [number, string], //a tuple that handles the specified elements on their respective index
    rules: Rules //specifying an enum to be used as a type for this key
} = {
    name: 'Jeff',
    age: 22,
    hobbies: ['Writing', 'Sleeping'], //key with array
    role: [1, 'author'], //key with tuples
    rules: Rules.ADMIN //a value from the specified enum
};

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

console.log(person.rules)



