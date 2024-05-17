let a, b;
[a, b] = [1, 2];

setTimeout((() => { 
    console.log("hello!");
    console.log("This is an arrow function.");
}), 0);

console.log(a, b);
console.log(a);
console.log(b);

[a, ...b] = [1, 2, 3, 4, 5];
console.log(a, b);

const test_obj = {
    field1: 1,
    field2: 2,
    field3: 3,
    field4: 4
};

// let f1, f2, f3; 
let {field1: f1, field2: f2, ...f3} = test_obj;
console.log(f1, f2, f3);
