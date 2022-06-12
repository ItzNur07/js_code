// How to take duplicate number in array

const numbers = [1, 4, 5, 6, 5, 7, 6, 9, 10, 4];

const dupArray = numbers.filter((value, index, arr)=>{
  return arr.indexOf(value) !== index; 
})
console.log(dupArray.sort((a, b)=>{return a - b}));

