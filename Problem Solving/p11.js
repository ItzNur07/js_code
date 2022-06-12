// fasle value: undefind false 0 nan "" 

const mixedArr = ["lws",undefined,"Sumit",false,"","apple",40,"k",true,"thanks all",NaN,0]

// const trueArr = mixedArr.filter((value, index, array) => {
//   if(value){
//     return true;
//   }else {
//     return false;
//   }
// })

const trueArr = mixedArr.filter(Boolean)

console.log(trueArr);