// 30.  Write a function to calculate the sum of total marks in an array of objects.

function calculateTotalMarks(arr) {
    return arr.reduce((sum, obj) => sum + obj.marks, 0);
}

// Example usage:
const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 },
    { name: "David", marks: 88 }
];

console.log(calculateTotalMarks(students)); // Output: 343
