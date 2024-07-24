//length of email >11
// after . only 2 or 3 characters allowed
// minimum 3 characters between @ and .

let email = "radha.kulkarni024@gmail.com";
console.log("email length-", email.length);
let dotIndex = email.lastIndexOf(".");
console.log("dot index-", dotIndex);
let atTheRateIndex = email.lastIndexOf("@");
console.log("dot index-", dotIndex);
const lastIndexEmail = email.length - 1;

console.log("last index", lastIndexEmail);
console.log("check", lastIndexEmail - dotIndex);
//Any of the condition from below returns true then it is an invalid mail because we are checking all falls conditions

if (
  (email.length > 11 && lastIndexEmail - dotIndex > 2) ||
  (lastIndexEmail - dotIndex <= 3 && dotIndex - atTheRateIndex >= 3)
) {
  console.log("valid");
}
