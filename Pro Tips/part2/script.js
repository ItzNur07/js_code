// tips1 🤍
// Swaping array

// let arr = [1,3,4,5,7];

// let a = arr[0];
// arr[0] = arr[4];
// arr[4] = a;
// console.log(arr);
// one line swaping

// [arr[0], arr[4]] = [arr[4], arr[0]]
// console.log(arr);

// let fatherName = "Hasina Akther";
// let motherName = "Sumsuddin";

// [fatherName, motherName] = [motherName, fatherName];
// console.log(fatherName);

// tips2 🤍🤍
// destructuring aliases

// const language = {
//   name: "javascript",
//   founded: 1995,
//   founder: "Brendan Eich"
// }

// const {name: languageName, founder: createrName} = language;
// ;
// console.log(`The Language Name is ${languageName}`);
// console.log({createrName});

// tips3 🤍🤍🤍

// const el = document.querySelector("#number").valueAsNumber;

// console.log(typeof(el));

// tips4 🤍🤍🤍🤍

const array = [1,3,3,4,5,6,5,6];

console.log([...new Set(array)]); 

 