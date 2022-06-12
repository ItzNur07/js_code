// array te sob cehe boro string and ter index number ta

function longeString(names) {
  let longestWord = '';

  for(item of names) {
    item.length > longestWord.length ? longestWord = item : 0 ;
  }

  return [longestWord , names.indexOf(longestWord)]
}

console.log(longeString(["Sumit Saha","Learn With Sumit","Akash","Saad"]));