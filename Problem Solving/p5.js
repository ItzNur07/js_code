// Kono sentence a kotogula vowel ase ta ber kora

const vowel = ['a','e','i','o','u'];

function countVowel(sentence) {
  let count = 0;
  const letters = Array.from(sentence);
  letters.map((t)=>{
    if(vowel.includes(t)){
      count++;
    }
  })
  return count;
}

var text = "I Love Islam and Musim";
var t = text.toLowerCase();
console.log(countVowel(t));