// 31.  Write a function to merge two arrays with extra zeros.

function mergeWithZeros(arr1, arr2) {
    let result = [];

    arr1.forEach(element => {
        result.push(element);
        result.push(0); 
    });

    arr2.forEach(element => {
        result.push(element);
        result.push(0); 
    });

    return result;
}


console.log(mergeWithZeros([1, 2, 3], [4, 5, 6]))
