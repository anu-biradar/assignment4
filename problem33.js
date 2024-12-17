// 33.  Write a deep clone function to create a copy of a nested object or array without any reference to the original.

function deepClone(value) {
    if (value === null || typeof value !== 'object') {
        return value;
    }

    if (Array.isArray(value)) {
        let arrCopy = [];
        for (let i = 0; i < value.length; i++) {
            arrCopy[i] = deepClone(value[i]); 
        }
        return arrCopy;
    }

    let objCopy = {};
    for (let key in value) {
        if (value.hasOwnProperty(key)) {
            objCopy[key] = deepClone(value[key]); 
        }
    }
    return objCopy;
}

const original = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "traveling"],
    address: {
        city: "Wonderland",
        zip: 12345
    }
};

const clone = deepClone(original);
clone.name = "Bob";
clone.hobbies.push("coding");
clone.address.city = "Dreamland";

console.log(original); 
console.log(clone);    
