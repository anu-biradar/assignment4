// 8. Write a function to find the maximum number in an array.

function findMax(arr){
    let max=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}

const numbers=[1,4,7,8,3,9,5,67]
console.log(findMax(numbers));
