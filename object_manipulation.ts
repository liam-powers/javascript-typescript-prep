/* Object Operations:

Exercise: Write functions to merge objects, clone objects, and 
manipulate nested objects.
Example: Implement a deep clone function for objects.
*/

setTimeout(() => console.log("timeout finished!"), 0);

const mergeObjects = (obj1: Object, obj2: Object) => {
    let mergedObj: Object;

    mergedObj = {...obj1, ...obj2};

    return mergedObj;
};

const cloneObject = (obj: Object) => {
    let cloneObj: {[key: string]: any} 
    cloneObj = {...obj};

    console.log(cloneObj);
    cloneObj.randomField = "exclusivePls!!!";

    console.log(cloneObj);
    console.log(obj);
    return cloneObj;
};

let obj1 = {
    1: "hello",
    "2": "hi",
}

let obj2 = {
    "3": "hola",
    "4": "que tal",
}

let obj3 = mergeObjects(obj1, obj2)
console.log(obj3);


console.log("_________________");
let cloneObj = cloneObject(obj3);

console.log(cloneObj);
