// 13. Write a JavaScript code to extract numbers between two characters in a string and add them all.

function extractAndSumBetweenChars(str,char1,char2){
    let sum =0
    let isBetweenChars=false
    let numberBuffer=''

    for(let i=0;i<str.length;i++){
        let char=str[i]

        if(char===char1){
            isBetweenChars=true
        }else if(char===char2){
            isBetweenChars=false

            if(numberBuffer){
                sum +=parseInt(numberBuffer,10)
                numberBuffer=''
            }
        }else if(isBetweenChars && !isNaN(char)){
            numberBuffer+=char
        }else if(!isBetweenChars && numberBuffer){
            sum+=parseInt(numberBuffer,10)
            numberBuffer=''
        }
    }
    if(numberBuffer){
        sum+=parseInt(numberBuffer,10)
    }
    return sum
}

const inputString = "a12x34b56c78";
const char1 = 'x';
const char2 = 'c';
console.log(extractAndSumBetweenChars(inputString, char1, char2));