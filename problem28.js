// 28.  Write a function to add zeros after every 3 values in an array.

function addZerosAfterEveryThree(arr) {
    let result = [];  

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
        if ((i + 1) % 3 === 0) {
            result.push(0);
        }
    }

    return result;
}

console.log(addZerosAfterEveryThree([1, 2, 3, 4, 5, 6, 7, 8, 9]));  
console.log(addZerosAfterEveryThree([10, 20, 30, 40, 50, 60]));   
console.log(addZerosAfterEveryThree([5, 8, 9]));                   
console.log(addZerosAfterEveryThree([1, 2, 3]));                  
console.log(addZerosAfterEveryThree([1, 2]));                     
