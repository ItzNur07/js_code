// javascript Math Object

console.log(Math.PI);
console.log(Math.floor(Math.random() * 3));

console.log(Math.min(0, 150, 30, 20, -8, -200));

console.log(Math.max(0, 150, 30, 20, -8, -200));

console.log(Math.round(5.7355));

console.log(Math.pow(3,2));

function getRndInteger(min, max) {
console.log(Math.floor(Math.random() * (max - min) ) + min);
}
getRndInteger(4,10);
