
let button = document.querySelector("#button");

button.addEventListener("click", () => {
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => console.log(data.results))

})