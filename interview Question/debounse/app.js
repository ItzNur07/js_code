let button = document.querySelector("#button");

function debounce(fn, delay){
  let timeOutId;
  return function() {
    if(timeOutId){
      clearTimeout(timeOutId)
    }
    timeOutId = setTimeout(() => {
      fn()
    }, delay);
  }
}

button.addEventListener("click",debounce(() => {
  console.log("click");
}, 2000))

let input = document.querySelector("#input");

function debounce(fn, delay) {
  let timeOutId;
  return function() {
    if(timeOutId) {
      clearTimeout(timeOutId)
    }
   timeOutId = setTimeout(() => {
      fn();
    }, delay);
  }
}


input.addEventListener('keyup',debounce(() => {
  console.log(input.value);
}, 2000));