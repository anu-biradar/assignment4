// 12. Write a program to add zeros after every 3 values in an array.

function addZeros(arr){
    let result=[]
    let count =0

    for(let i=0;i<arr.length;i++){
        result.push(arr[i])
        count++
        if(count===3){
            result.push(0)
            count=0
        }
    }
   return result
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(addZeros(inputArray));