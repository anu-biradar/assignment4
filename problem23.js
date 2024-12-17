// 23. Write a function to find the second maximum and minimum numbers in an array.

function findSecondMaxAndMin(arr) {
    if (arr.length < 2) {
        return { secondMax: null, secondMin: null };
    }

    let max = -Infinity, secondMax = -Infinity;
    let min = Infinity, secondMin = Infinity;

    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }

        if (num < min) {
            secondMin = min;
            min = num;
        } else if (num < secondMin && num > min) {
            secondMin = num;
        }
    }

    return { secondMax, secondMin };
}

console.log(findSecondMaxAndMin([3, 1, 4, 1, 5, 9, 2, 6, 5])); 
console.log(findSecondMaxAndMin([10, 20, 30, 40, 50])); 
console.log(findSecondMaxAndMin([5, 5, 5, 5])); 
console.log(findSecondMaxAndMin([1])); 

