function loopOverArray() {
  const student = ["riya", "priya", "siya", "arya", "kavya", "shreya"];
  let len = student.length;
  for (let i = 0; i < len; i++) {
    console.log(typeof i); //type of i is = number
    console.log(`roll no ${i}: ${student[i]}`);
  }
}
loopOverArray();

function forInLoop() {
  const student = ["riya", "priya", "siya", "arya", "kavya", "shreya"];
  //for-in loop - for in loop act as an exact simple for loop just syntax wise its different.
  for (let i in student) {
    //its envaluated as for(let i = 0; i< student.length;i++) i means index number iterator here.
    // console.log(typeof(i)) // type of i = string
    console.log(`roll number ${Number(i) + 1}:${student[i]},`); // here in for in type of i is always be in string so if we are performing any opertions we need to convert it to num first.
  }
}
forInLoop();

function forOfLoop() {
  //for of loop we use when we want to iterate directly over an element in an array.
  // for - for in loop we take i as an iterator which means i is index number but
  // in for of loop we directly loop over an element in an array not on index number.

  const student = ["riya", "priya", "siya", "arya", "kavya", "shreya"];
  for (element of student) {
    console.log(element); //output: "riya","priya","siya","arya","kavya","shreya" - no index number
  }
}

forOfLoop();

var arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
var ele = 56;
function deleteOccur(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      console.log(arr.splice(i, 3)); // delete only 1 element at this mentioned index;
      i--; //to adjust the index of an array after removing element
    }
  }
  return arr;
}
console.log(deleteOccur(arr, ele));
