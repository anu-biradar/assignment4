//14. Write a program to find the count of the maximum prefix and suffix that are the same in a given string.

function maxPrefixSuffixCount(str){
    let n=str.length
    maxCount=0
    for(let len=1;len<=Math.floor(n/2);len++){
        let prefix=str.slice(0,len)
        let suffix=str.slice(n-len)

        if(prefix===suffix){
            maxCount=len
        }
    }
    return maxCount
}

const inputString='abcab'
console.log(maxPrefixSuffixCount(inputString));
