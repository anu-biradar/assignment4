// 5. Write a program to print numbers 1-10 with a delay of 1 second between each number.

let number=1

const interval=setInterval(()=>{
    console.log(number);
    number++

    if(number>10){
        clearInterval(interval)
    }
},1000)