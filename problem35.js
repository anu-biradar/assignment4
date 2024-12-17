/*35.  Write a function to generate the specified pattern.

        1

        2 9

        3 8 10

        4 7 11 14

        5 6 12 13 15          */

function generatePattern(n) {
    let result = [];
    let current = 1;
    
    
    for (let i = 1; i <= n; i++) {
        let row = [];
        
        for (let j = 0; j < i; j++) {
            row.push(current);
            current++;
        }
        
        result.push(row);
    }
    
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].join(" "));
    }
}

generatePattern(5);
        