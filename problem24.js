// 24. Write a function to sort an array without using built-in methods.

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped = true; 
            }
        }

        n--;

    } while (swapped); 

    return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));  
console.log(bubbleSort([10, 1, 5, 2, 7])); 
console.log(bubbleSort([3, 3, 3, 1, 2]));
