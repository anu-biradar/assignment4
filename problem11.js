// 11. Write a function to count repeated characters in a string and print in a string format.

function countRepeatedCharacters(str) {
    let charCount = {}; 
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    let result = '';
    for (let char in charCount) {
        result += `${char}:${charCount[char]} `;
    }
    return result.trim();
}

const inputString = "programming";
console.log(countRepeatedCharacters(inputString));