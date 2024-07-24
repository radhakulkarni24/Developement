//length of email >11 --done
// after . only 2 or 3 characters allowed
// minimum 3 characters between @ and .
//Email should have at least 3 characters before “@"

//My Logic

// function acceptEmail(email) {
//   let result;
//   const emailLength = email.length;
//   console.log("Length:", emailLength);
//   const checkLength = emailLength > 11;
//   console.log(checkLength);

//   //find index of @ and .
//   const rateIndex = email.lastIndexOf("@");
//   console.log("@ index=", rateIndex);
//   const dotIndex = email.lastIndexOf(".");
//   console.log(". index=", dotIndex);

//   //Note: Here we are perfoming operations based on index not on string length so its nessesary to find last index of email.
//   const lastIndexOfStr = emailLength - 1;
//   console.log("Last Index of email=", lastIndexOfStr);

//   const charsBeforeRate = dotIndex
//   const charAtZeroInd = email.charAt([0]);
//   const firstIndexOfStr = email.indexOf(charAtZeroInd);
//   console.log(charAtZeroInd);
//   console.log(firstIndexOfStr);
// //   console.log(index[0]);

//   //check all true conditions
//   if (
//     (emailLength > 11)&&  //true
//     (lastIndexOfStr - dotIndex >= 2  &&  //12-9=3-->true
//     lastIndexOfStr - dotIndex <= 3 ) && //12-9=3 --->true
//     (dotIndex - rateIndex >= 5)&& //9-3 = 3 --true
//     (dotIndex-firstIndexOfStr>=3)
//   ) {
//     result = "Valid Email!";
//     console.log(result);
//   } else {
//     result = "Invalid Email!";
//     console.log(result);
//   }
// }

// acceptEmail("abc@gmail.com");

//Ninja Logic
function emailValidation(email) {
  let result; //declaration
  if (!"@") {
    console.log("@ is not included, invalid email!");
  }
  const char1 = email.charAt(0);
  console.log(char1);
  const char2 = email.charAt(1);
  console.log(char2);
  const char3 = email.charAt(2);
  console.log(char3);

  if (char1 != 0 && char2 != 0 && char3 != 0) {
    result = email;
    console.log(email, "is valid email!");
  } else {
    console.log(email, "is invalid email!");
  }
}
emailValidation("abc@gmail.com");
