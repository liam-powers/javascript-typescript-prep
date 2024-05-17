// Implement a TypeScript function that takes an array of objects
// representing people (each object having a 'name' and 'age' field) 
// and sorts them in ascending order based on their age.


interface PersonObject {
    age: number;
    name: string;
};

const sortObjsOnAge = (personObjs: Array<PersonObject>) => {
    personObjs.sort((person1, person2) => person1.age - person2.age);

    return personObjs;
};

let person1: PersonObject = {
    age: 17,
    name: "Liam",
};

let person2: PersonObject = {
    age: 5,
    name: "Charlie",
};

let persons: Array<PersonObject> = [person1, person2];
console.log(persons);

persons = sortObjsOnAge(persons);
console.log(persons);

persons.forEach((person, idx) => {
    console.log(idx, person.name);
    console.log(persons[idx].name);
});
