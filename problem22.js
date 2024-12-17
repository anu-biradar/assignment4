// 22. Count the occurrences of each unique character in the string

function countCharacterOccurrences(str) {
    let charCount = {};  

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}

console.log(countCharacterOccurrences("aabcc"));  
console.log(countCharacterOccurrences("hello"));  
console.log(countCharacterOccurrences("abc123!@#"));
