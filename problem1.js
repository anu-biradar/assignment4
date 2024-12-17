/* Analyze the given input and output, write a program accordingly

   Input a = [2,3,4,5,3,3,5,2,5,3] and Output [ 5, 5, 5, 4, 3, 3, 3, 3, 2, 2]  */

   function frequencySort(arr) {

    let freq = {}; 
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (freq[num] === undefined) {
        freq[num] = 1; 
      } else {
        freq[num]++; 
      }
    }
  
    let elements = [];
    for (let key in freq) {
      elements.push([parseInt(key), freq[key]]);
    }
  
    for (let i = 0; i < elements.length - 1; i++) {
      for (let j = i + 1; j < elements.length; j++) {
        if (elements[i][1] < elements[j][1]) {
          let temp = elements[i];
          elements[i] = elements[j];
          elements[j] = temp;
        }
        else if (elements[i][1] === elements[j][1] && elements[i][0] < elements[j][0]) {
          let temp = elements[i];
          elements[i] = elements[j];
          elements[j] = temp;
        }
      }
    }

    let output = [];
    for (let i = 0; i < elements.length; i++) {
      let value = elements[i][0];
      let count = elements[i][1];
      for (let j = 0; j < count; j++) {
        output.push(value);
      }
    }
  
    return output;
  }
  
  let a = [2, 3, 4, 5, 3, 3, 5, 2, 5, 3];

  let b = frequencySort(a);
  console.log(b);