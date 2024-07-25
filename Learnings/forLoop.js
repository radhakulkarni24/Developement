function forLoop() {
  let count = [1, 0, -1, -4, 5];

  let result;
  for (let i = 0; i <= count.length - 1; i++) {
    result = count[i];
    // let findIndex=count.indexOf(count[i]);
    console.log(`count[${i}]-`, result);
    // console.log(findIndex,result);
  }
  return result;
}
forLoop();

//print given array in reverse order using for loop
function reverseArray() {
  let count = [1, 0, -1, -4, 5];
  for (let i = count.length - 1; i >= 0; i--) {
    console.log(count[i]);
  }
}

reverseArray();

function declareMultipleVarsInLoopHeaders() {
  let arr = [1, 4, 7, 8, 9];
  for (let i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i]);
  }
  return;
}
declareMultipleVarsInLoopHeaders();

function takeInputeFromUser() {
  //ask users how many number
  let n = parseInt(prompt("how many numbers you want to add?"));

  //we want to display sum hence we intialized sum=0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + parseInt(prompt(`add numbers ` + (i + 1)));
  }
  document.write(sum);
}
takeInputeFromUser();
