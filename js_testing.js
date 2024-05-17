let obj = {
    name: "Liam",
    age: 20,
    location: "Evanston"
};

console.log("keys (key in obj):");
for(let key in obj) {
    console.log(key);
};


console.log("keys (Object.keys):");
for(let key in Object.keys(obj)) {
    console.log(key);
};




const const_string = "don't change me";
let let_string = "please change me";
var var_string = "and me, please change me too";

// this will error if uncommented: 
// const_string = "wrong";
let_string = "correct";
var_string = "correct?";

console.log(let_string);
console.log(var_string);

const const_obj = {
    height: "6'5",
    age_string: "10",
    age_num: 10,
    "random": 5,
};

console.log("const_obj before: ", const_obj);

const_obj.height = "6'3";
const_obj.age_num = 15;
const_obj["random"] = 10;

console.log("const_obj after: ", const_obj);

console.log(typeof 1);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof const_obj);
console.log(typeof const_obj["random"]);
console.log(typeof const_obj.height);

let func_obj = {
	name: "Liam",
	"location": "NU",
	"my age": 25,
	restaurants: ["here", "there", "everywhere"],
	get_age() {
		this.restaurants.forEach((skill) => { 
			console.log(skill)
        });
    },
};

func_obj.get_age();

