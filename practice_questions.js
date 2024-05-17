// Question: Write a function that takes an array of numbers 
// and returns a new array with all the even numbers doubled 
// and odd numbers unchanged.


const transformArray = (numbers) => {
    numbers = numbers.map((num) => {
        if (num % 2 == 0) {
            return num * 2;
        }
        else {
            return num;
        }
    });

    return numbers;

    // return numbers;
};

let myArr = [1, 2, 3, 4, 5, 6];
myArr = transformArray(myArr);
console.log(myArr);

const isPalindrome = (str1) => {
    let begin, end;
    begin = 0;
    end = str1.length - 1;

    if (end == 1) {return true;}

    while (begin <= end) {
        // ignoring whitespace
        while (str1[begin] == " ") {str1++;}
        while (str1[end] == " ") {str1--;}
        if (str1[begin] != str1[end]) {return false;}
        begin++;
        end--;
    }

    return true;
};

const str1 = "racecar";
const str2 = "go hang a salami im a lasagna hog";
const str3 = "bang bang shebang";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
