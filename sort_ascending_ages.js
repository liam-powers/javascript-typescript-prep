// Implement a TypeScript function that takes an array of objects
// representing people (each object having a 'name' and 'age' field) 
// and sorts them in ascending order based on their age.
;
var sortObjsOnAge = function (personObjs) {
    personObjs.sort(function (person1, person2) { return person1.age - person2.age; });
    return personObjs;
};
var person1 = {
    age: 17,
    name: "Liam",
};
var person2 = {
    age: 5,
    name: "Charlie",
};
var persons = [person1, person2];
console.log(persons);
persons = sortObjsOnAge(persons);
console.log(persons);
persons.forEach(function (person, idx) {
    console.log(idx, person.name);
    console.log(persons[idx].name);
});
