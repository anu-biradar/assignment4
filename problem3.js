/* 3. Given an array of objects representing people with their names and ages,
      use filter to get only the people who are 18 or older,
      and then use map to create an array of their names.     */

const people = [{ name: "Alice", age: 25 },{ name: "Bob", age: 17 },
                { name: "Charlie", age: 30 },{ name: "David", age: 16 },
                { name: "Eve", age: 20 }  ];

let ageGroup=people
             .filter(person=>person.age>=18)
             .map(person=>person.name)

console.log(ageGroup);
