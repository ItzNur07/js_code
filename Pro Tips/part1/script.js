// tips1 🤍
//Boolean (Expression) in js returns true or false

// const mincellaneous = ["Apple", false, "Orange", NaN, "", true, "Benana", undefined];

// const trueArray = mincellaneous.filter(Boolean);
// console.log(trueArray);

// tips2 🤍🤍
// convert any value to boolean
// useing !! in front of any value or Boolearn object
// console.log(!!"Masrafi");
// console.log(!!0);

// console.log(Boolean("Masrafi"));

// tips3 🤍🤍🤍
// resizing any array

// let animals = ["Dog", "Cat", "Sial", "Lion"];
// console.log(animals);
// //use a array's lenght property 
// animals.length = 2;
// console.log(animals);

// tips4 🤍🤍🤍🤍
// How to flattern a multi-dimentional array

// const grouptStudents = ["Rakib", ["Sayem", "Hasib"], "Rokib",["Nym"]];
// console.log(grouptStudents);
// let flatArr = grouptStudents.flat();

// console.log(flatArr);

// const studentsRoll = ['12', '13',['23', '24', ['25'], '34'], ['56']];
// console.log(studentsRoll.flat(Infinity));

// tips5 🤍🤍🤍🤍🤍
// short conditionals

// let captain = "Mashrafi";
// use if
// if(captain === "Mashrafi") {
//   console.log("Right");
// }
// use && 

// captain === "Mashrafi" && console.log("Right") || console.log("W");

// // use ||
// captain === "Mashrafi" && console.log("Rigt") || console.log("Worng");

// tips6 🤍🤍🤍🤍🤍🤍
// Replace all occurances of a string
// const quote = "React is a JS framework & this framework is the most populer front-end framework right now";

// console.log(quote.replace(/framework/g,"Library"));

// tips7 🤍🤍🤍🤍🤍🤍🤍
// console log tips 
// const library1 = "React";
// const library2 = "Jquery";
// const library3 = "Anguler";

// console.log(`library1 - ${library1}`);
// console.log({library3});

// tips8 🤍🤍🤍🤍🤍🤍🤍🤍
// check program performence

const startTime = performance.now();

for (let i = 0; i <= 10; i++) {
  console.log(i);  
}

const endTime = performance.now();

console.log(`This Program StartTime: ${startTime} mili.s & EndTime: ${endTime} mili.s`);