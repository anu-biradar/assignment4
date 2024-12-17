// 27. Write a function to find the second largest number in a nested array.

function findSecondLargest(arr) {
    const flattenedArr = flattenArray(arr);
    const uniqueArr = [...new Set(flattenedArr)];

    if (uniqueArr.length < 2) {
        return null;
    }

    uniqueArr.sort((a, b) => b - a);

    return uniqueArr[1];
}

function flattenArray(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item)); 
        } else {
            result.push(item); 
        }
    }
    return result;
}

console.log(findSecondLargest([1, [2, 3], [4, 5], 6])); 
console.log(findSecondLargest([[10], [20, 5], [30]])); 
console.log(findSecondLargest([1, 1, [1, 1]])); 
console.log(findSecondLargest([5, 3, [8, 6], 2])); 
