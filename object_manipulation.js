/* Object Operations:

Exercise: Write functions to merge objects, clone objects, and
manipulate nested objects.
Example: Implement a deep clone function for objects.
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
setTimeout(function () { return console.log("timeout finished!"); }, 0);
var mergeObjects = function (obj1, obj2) {
    var mergedObj;
    mergedObj = __assign(__assign({}, obj1), obj2);
    return mergedObj;
};
var cloneObject = function (obj) {
    var cloneObj;
    cloneObj = __assign({}, obj);
    console.log(cloneObj);
    cloneObj.randomField = "exclusivePls!!!";
    console.log(cloneObj);
    console.log(obj);
    return cloneObj;
};
var obj1 = {
    1: "hello",
    "2": "hi",
};
var obj2 = {
    "3": "hola",
    "4": "que tal",
};
var obj3 = mergeObjects(obj1, obj2);
console.log(obj3);
console.log("_________________");
var cloneObj = cloneObject(obj3);
console.log(cloneObj);
