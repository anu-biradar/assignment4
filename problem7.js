// 7. Write a function to remove duplicate elements from an array without using default functions.

function removeDuplicates(arr){
    let uniqueArray=[]
    for(let i=0;i<arr.length;i++){
        let isDuplicate=false

        for(let j=0;j<uniqueArray.length;j++){
            if(arr[i]===uniqueArray[j]){
                isDuplicate=true
                break
            }
        }
        if(!isDuplicate){
            uniqueArray.push(arr[i])
        }
    }
    return uniqueArray
}


const arr=[1,2,2,1,3,4,4,5,6,6,3]
console.log(removeDuplicates(arr));