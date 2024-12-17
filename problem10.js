// 10. Write a function to flatten a nested array.

function flattenArray(arr){
    let flat=[]

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            let nestedFlat=flattenArray(arr[i])
            for(let j=0;j<nestedFlat.length;j++){
                flat.push(nestedFlat[j])
            }
        }else{
            flat.push(arr[i])
        }
    }
    return flat
}

const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
console.log(flattenArray(nestedArray));