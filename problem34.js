// 34.  Write a function to find how many times each element is repeated in an array.

function countElementFrequency(arr) {
    let frequency = {};  
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
    }

    return frequency;
}

console.log(countElementFrequency([1, 2, 2, 3, 4, 4, 4, 5, 1]));