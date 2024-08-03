//find()
//find method finds the element in an array if it satisfies the consition it will return first element which matches the condition

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.find((item) => item % 2 == 0);
console.log(evenNumbers);

//findIndex() -//finds the index of first element in an array if it satisfies the consition it will return index of first element which matches the condition
let books = ["epic sheet", "atomic habit", "ikagai", "alchimist"];
const storeIndex = books.findIndex((book) => book === "atomic habit");
console.log("Index of book is-", storeIndex);

//join()//it return the string from an array //syntax = join(seprator)- seperator can be , . and anything. but comma is by default.
var names = ["abc", "bvc", "xyz", "lmo", "kjh", "ert"];
const joinNamesAsStr = names.join(" " + "and" + " ");
console.log("array converted to str using join--", joinNamesAsStr);

//lastIndexOf()-The lastIndexOf() method returns the last index (position) of a specified value.
var movies = ["RHTDM", "ZNMD", "3Idiots", "RHTDM", "sita rmama", "RHTDM"];
const lastIndex = movies.lastIndexOf("RHTDM");
console.log("last index - ", lastIndex);

//reverse  - it is used to reverse the array and does not change the origianal array;
var flowers = ["rose", "sunflower", "merigold", "lily", "jasmin"];
const reverseArray = flowers.reverse();
console.log(reverseArray);

//sort-sorts the array in asending order
console.log(flowers.sort());
var digits = [67, 93, 12, 0, 53, 20];
const sortDigits = digits.sort(function (a, b) {
  return a - b;
}); //after sort we taken one function when we compare numbers we need to take compare function to show sorting in numbers properly, as i written that the format of comp.func.
console.log(sortDigits);

//toReversed - exact same as reverse method()
var letters = ["r", "y", "i", "k", "l", "j", "p"];

const list = letters.values();
let text = "";
for (let item of list) {
  text = text + item;
  console.log(text);
}

//with()-used to update the elements in an array with(index,value);
const updateValues = letters.with(1, "k");
console.log("updated value", updateValues);
