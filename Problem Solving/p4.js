// When year leap your or not leap year


function isLeapYear(year){
  return year % 400 === 0 || (year % 4 === 0) && (year % 100 !== 0) ? "leap Year" : "No't Leap Year!";
}
console.log(isLeapYear(2004));