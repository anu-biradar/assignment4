// 2. Find a = [3,7,8,6,2,5] maximum and minimum number in array

let a=[3,7,8,6,2,5]
let maximum=a[0]
let minimum=a[0]
for(let i=1;i<a.length;i++){
    if(a[i]>maximum){
        maximum=a[i]
    }
    if(a[i]<minimum){
        minimum=a[i]
    }
}
console.log('Maximum number in Array is',maximum);
console.log('Minimum number in Array is',minimum);
