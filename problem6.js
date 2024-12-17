// 6. Write a function to check if a given string is a palindrome.

function checkPalindrome(str){
let left=0
let right=str.length-1

while(left<right){
        if(str[left] !== str[right]){
            return false
        }
        left++
        right--
    }
    return true
}

console.log(checkPalindrome("hello"));
console.log(checkPalindrome("racecar"));
