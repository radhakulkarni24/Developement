function arrayMethods() {
  //array starts with index - 0
  /*In other launguages - arrays are static it means by the time of defining array we need to specify the size of an array 
    but this thing doesnt happen with JS - we can chnage the size of array at runtime hence they are dynamic.*/

  let roles = ["manager", "consultant", "associate", "senior"];
  const check = roles.push("junior"); // push - it add element at the end of an array.
  console.log(check); //push method return length.
  const checkUnshift = roles.unshift("founder", "co-founder", "owner");
  console.log(checkUnshift); // unshift - it inserts element at the start of an array.
  console.log(roles, roles.length);

  let salary = [10000, 20000, 70000];
  const salCheck = salary.pop(); //last element will be removed and if array is empty it will return undefined
  console.log("salcheck", salCheck);
  const salShift = salary.shift();
  console.log("shift", salShift);
  console.log(salary);

  let dept = [];
  console.log("rresult", dept.pop()); //result undefined

  //nesting of an array
  var fruits = ["banana", "apple"];
  var newArr = fruits.push(["graps", "papaya"]);
  console.log("fruits", newArr);
  console.log(fruits);
  console.log(fruits[2][0]); //nesting

  // indexOf;
  var letters = ["a", "f", "u", "i", "p", "r", "k"];
  console.log(letters.indexOf("u"));

  //includes
  // const acceptLetter = prompt("enter letter");
  // if (letters.includes(acceptLetter)) {
  //   document.write("present");
  // } else {
  //   document.write("not present");
  // }

  //Slice
  //for negative number - array starts with -1 from right to left
  //for positive number array starts from left to right with 0
  let odd = [2, 3, 4, 5, 6, 7, 8, 9];
  console.log(odd.slice(3)); //it removes first two elements & starts including from 3; out - [5,6,7,8,9]
  console.log(odd.slice(4, 6)); // it removes first three elements & starts including from 4 , 5 it doesnt inlcude last element which is 6 here. // output[6,7]
  //in positivie number first num should be small and secont must be greater
  console.log(odd.slice(-5, -3)); //in negative, first number must be greater and second should be small-last number not included
  console.log(odd.slice(-3)); //here it includes numbers till -3 out - [7,8,9]

  // //Splice
  // // this method is used to add items between the array
  var colors = ["red", "black", "green", "blue", "yellow"];
  colors.splice(1, 3, "lavender"); //first arg is at which poistion we want to add element, sec arg is how many items we want to delete
  //third position means which item we want to add.
  console.log("store", colors);

  //concate - to concate the elements with each other
  let a = [1, 2, 3];
  let b = [4, 5, 6];
  const c = a.concat(b);
  console.log(c);
}
arrayMethods();
