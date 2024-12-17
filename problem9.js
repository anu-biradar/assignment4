//9. Write a function to remove duplicate arrays from an array of arrays.

function removeDuplicateArrays(arrays){
    let uniqueArrays=[]
    for(let i=0;i<arrays.length;i++){
        let isDuplicate=false
        for(let j=0;j<uniqueArrays.length;j++){
            if(arraysAreEqual(arrays[i],uniqueArrays[j])){
                isDuplicate=true
                break
            }
        }
        if(!isDuplicate){
            uniqueArrays.push(arrays[i])
        }
    }
    return uniqueArrays
}

function arraysAreEqual(arr1,arr2){
    if(arr1.length!==arr2.length){
        return false
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false
        }
    }
    return true
}

const arrayOfArrays=[[1,2],[3,4],[1,2],[5,6],[3,4]]
console.log(removeDuplicateArrays(arrayOfArrays));
