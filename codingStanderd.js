
console.log('--- Function ---');
// How to Maintain Coding Standerd 

function myFunc() {
  return "Hello World";
}
console.log(`Program Run ${myFunc()}`);

console.log("---- Array ----");

// Standerd Type of array
const myArr = ["Arif","Fahim","Jony","Rakib"];
console.log(myArr);

myArr.map((a) => {
  console.log(a);
})

console.log("-------- Condition -----");
// type Condition Standerd way
if(5 === "5") {
  console.log("Type Is Right");
} else {
  console.log("Type Is Wrong!");
}

// Tarnery Oparetor Type 

let checkType = 5 === 5 ? "Type is Right!" : "Type is Wrong!";
console.log(checkType);

console.log("------ Class -----");

class Person{
  constructor(name, age, id){
    this.name = name;
    this.age = age;
    this.id = id;
  }
}

const person1 = new Person("Sana Ullah",19, "015553332");
const person2 = new Person("Huzaifa",16, "015235382");

console.log(person1);

console.log("--- Object ---");
// type object standerd way

const personInfo = {
  name: "Rohim Khan", 
  age: 19, 
  hobby: "Coding"
};

console.log(personInfo);
console.log(personInfo.hobby);