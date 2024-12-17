//16. Write a program to remove the middle element from an array, or if the middle element is not there, remove every element except the first and last ones.

function removeMiddleElement(arr){
    let n=arr.length

    if(n===0)return []

    if(n%2 != 0){
        let middleIndex=Math.floor(n/2)
        arr.splice(middleIndex,1)
    }else{
        arr=[arr[0],arr[n-1]]
    }
    return arr
}

console.log(removeMiddleElement([1, 2, 3, 4, 5])); 
console.log(removeMiddleElement([1, 2, 3, 4]));    
console.log(removeMiddleElement([1]));             
console.log(removeMiddleElement([]));  