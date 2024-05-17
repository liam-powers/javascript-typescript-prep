let test_string = "what is up, Up";

test_string = test_string.slice(0, -1);

console.log(test_string);

test_string = test_string.substr(0, 4);

console.log(test_string);

let test_string_2 = "concat!";
test_string = test_string.concat("@", test_string_2);

console.log(test_string);

test_string = test_string.toUpperCase();

console.log(test_string);

test_string = " w h a t  i s  u p ? @ . . . ";
test_string = test_string.trim();
console.log(test_string);

test_string = test_string.repeat(10);

console.log(test_string);

function run() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);

    console.log(4);
    console.log(4);
    console.log(4);
    console.log(4);
    console.log(4);
    console.log(4);
    console.log(4);
    console.log(4);
}

run();
