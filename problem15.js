//15. Write a program to find the missing numbers in an array containing numbers from 1 to 100.

function findMissingNumbers(arr){
    let missingNumbers=[]
    let numberPresent=new Array(101).fill(false)

    for(let i=0;i<arr.length;i++){
        if(arr[i]>=1 && arr[i]<=100){
            numberPresent[arr[i]]=true
        }
    }
    for(let i=1;i<=100;i++){
        if(!numberPresent[i]){
            missingNumbers.push(i)
        }
    }
    return missingNumbers
}

const inputArray = [1, 2, 4, 5, 7, 10, 50, 99];
console.log(findMissingNumbers(inputArray));