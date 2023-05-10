//arrays_tuples.ts
const person: {
    name: string,
    age: number,  //key name and specifying the type of each key
    hobbies: string[], //an array that handles string elements. you can use any[] to handle any type
    role: [number, string] //a tuple that handles the specified elements on their respective index
} = {
    name: 'Jeff',
    age: 22,
    hobbies: ['Writing', 'Sleeping'], //key with array
    role: [1, 'author'] //key with tuples
};

console.log(person.name);

//you can change values on tuples

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}



