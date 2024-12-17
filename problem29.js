// 29. Write a function to capitalize the first letter of each word in an array of strings.

function capitalizeWords(arr) {
    return arr.map(str => {
        return str.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    });
}

console.log(capitalizeWords(["hello world", "javaScript is fun", "this is a test"])); 

console.log(capitalizeWords(["coding challenges", "array manipulation"])); 
console.log(capitalizeWords(["make every word", "count in this string"])); 
