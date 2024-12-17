// 19. Filter numeric palindromes from the input array

function filterNumericPalindromes(arr) {
    return arr
        .map(item => {
            let numericPart = item.replace(/[^0-9]/g, "");

            if (numericPart && isPalindrome(numericPart)) {
                return parseInt(numericPart, 10); 
            }
            return null; 
        })
        .filter(item => item !== null); 
}

function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false; 
        }
        start++;
        end--;
    }
    return true; 
}

const input = ["1a1", "2aa3a", "aabc31", "101", "1001", "a1", "3211", "11c"];
console.log(filterNumericPalindromes(input)); 
