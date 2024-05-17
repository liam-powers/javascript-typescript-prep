const str1 = "The quick brown fox jumps over the lazy dog.";

let vowelsSet = new Set();
vowelsSet.add('a');
vowelsSet.add('e');
vowelsSet.add('i');
vowelsSet.add('o');
vowelsSet.add('u');
console.log("vowelsSet: ", vowelsSet);

let vowelCount = 0;
let consonantCount = 0;


const count_vowels_and_consonants = (str) => {
    for (let char of str) {
        // console.log('hey');
        if (vowelsSet.has(char)) {
            vowelCount++;
            console.log(vowelCount);
        }
        else {
            consonantCount++;
            console.log(consonantCount);
        }
    }

    return {vowelCount, consonantCount}
};

const {vowelCount: vowels, consonantCount: consonants} = count_vowels_and_consonants(str1);

console.log("vowels: ", vowels, "\nconsonants: ", consonants);
