//  How We Will Print 1 to 6 Random Number in Ludu Game

function luduGame() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(`Result is ${luduGame()}`);

// Other Way

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(1,6));