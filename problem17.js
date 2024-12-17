// 17.  Write a function to calculate the factorial of a number

function factorial(n){
    if(n<0){
     return 'Factorial Not Defined For Negative Numbers'
    }

    let result=1

    for(let i=1;i<=n;i++){
        result*=i
    }
    return result
}

console.log(factorial(9));
console.log(factorial(6));
console.log(factorial(4));
