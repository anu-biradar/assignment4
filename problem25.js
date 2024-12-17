// 25.  Write a function to remove duplicate characters in a string.

function removeDuplicates(str) {
    let result = '';
    let seen = new Set(); 

    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;   
        }
    }

    return result;
}

console.log(removeDuplicates("aabcc")); 
console.log(removeDuplicates("hello")); 
console.log(removeDuplicates("abcabcabc")); 

