// const arr1=[1,2,34,5];
// const arr2 = arr1.slice() //2,3,34,5
// arr2.push(6) //2,3,34,5,6
// console.log(arr1); //1,2,34,5

function reverseString(str) {
  //Implement Your function here
  let strRev = str.join(" ").reverse();
  console.log(strRev);
  return strRev;
}
console.log(reverseString("Hello"));
console.log(reverseString("olleh"));
console.log(reverseString(" "));
