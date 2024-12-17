function findNumericPalindromes(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        let numericPart = item.replace(/[^0-9]/g, "");

        if (numericPart && isPalindrome(numericPart) && numericPart.length > 1) {
            result.push(parseInt(numericPart, 10));
        }
    }

    return result;
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
console.log(findNumericPalindromes(input));
