
// array Method

//const persons = ["Halim","Maysu","Rukin","Jahed","Robin"];
//Join array method
//console.log(persons.join(" 😍 "));
// toString Method
//console.log(persons.toString());
//--- push and pop - shift and unshift method

// const persons = ["Halim","Maysu","Rukin","Jahed","Robin"];
// console.log(persons.pop()); // pop remove ele last
// console.log(persons);
// console.log(persons.push("Rakia")); // push add ele last
// console.log(persons);
// console.log(persons.shift()); // shift add element 1st
// console.log(persons);
// console.log(persons.unshift("Rujia")); // unshift remove 1st
// console.log(persons);
// // in this 4 method change a orginal array

// // -- array concat

// const asif_gang = ["Faruq","Rafi","Sayef","Madin"];
// const ratul_gang = ["Rohit","Maruf","Wahid","Sagor"];
// console.log(asif_gang.concat(ratul_gang));
// console.log(...asif_gang ,...ratul_gang); // Es6 Spread Oparetor

// // Concat 3 array with spread oparetor

// const a_grp = ["harun","Khan","Rofiq"];
// const b_grp = ["Sohid","Hanif","Skir"];
// const c_grp = ["Fahim","Sorif","Jyan"];

// console.log(a_grp.concat(b_grp , c_grp));
// console.log(...a_grp,...b_grp,...c_grp); // Spread Oparetor

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let newS = fruits.splice(2, 0,"Lemon", "Kiwi");
// console.log();

// array sort and reverse

// const p_lang = ["PHP","JS","Ruby","Python","Perl","Dart"];
// console.log(p_lang.sort());
// console.log(p_lang.reverse());

// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort(function(a, b){return a - b}));

// const number = [234, 34, 32, 532,45,21];
// console.log(number.sort(function(b,a){return b-a}));

// const point_num = [40,100,1,4,6,45,23];
// console.log(point_num.sort(function(){return 0.5 - Math.random()}));

// const point_num = [40,100,1,4,6,45,23];
// console.log(point_num.length);
// for(let i = point_num.length - 1 ; i > 0; i--){
//     let j = Math.floor(Math.random() * i);
//     let k = point_num[i]
//     point_num[i] = point_num[j];
//     point_num[j] = k;
// }
// console.log(point_num);

//+++++ literate

// const arr = ["Abu","Sadiq","Salim","Jakaria","Monir"];

// arr.forEach((a,n) => {
//     console.log(a);
//     console.log(n);
// })

// const arr = ["Abu","Sadiq","Salim","Jakaria","Monir"];

// arr.map((a)=> {
//     console.log(a);
// })
// console.log(arr);

// const arr = ["Hello","How","When","Where"];

// arr.filter((a)=>{
//     console.log(a);
// })

// const arr = [1,23, 12,46,234,675];
// arr.reduce((t,v,i,a)=>{
//     console.log(t);
// })

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }