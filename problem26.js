// 26. Write a function to convert a string from snake_case to camelCase.

function snakeToCamel(str) {
    let words = str.split('_');
    
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join('');
}

console.log(snakeToCamel("hello_world_example")); 
console.log(snakeToCamel("this_is_a_test")); 
console.log(snakeToCamel("convert_this_string")); 
