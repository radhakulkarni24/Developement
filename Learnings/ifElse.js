//Email validation
//only if, if-else, if-else-if
//Length of mail should be less then 11 - done
//after . only 2-3 chars are allowed. - done
//Minimum 3 chars between @and . - done

const acceptEmail = () => {
  const userEmail = prompt("Enter mail.....");
  const totalLengthOfMail = userEmail.length;

  console.log("mail length:", totalLengthOfMail);
  const lengthOfMail = totalLengthOfMail < 11; // true

  const indexOfAtTheRate = userEmail.indexOf("@");
  console.log("@ Index", indexOfAtTheRate);

  const indexOfDot = userEmail.indexOf(".");
  console.log("Index of Dot", indexOfDot);

  const calculate = userEmail.substring(indexOfAtTheRate + 1, indexOfDot); //char between @ and .
  console.log(calculate);

  const check = userEmail.substring(totalLengthOfMail, indexOfDot + 1); //char after .

  console.log("After dot-", check.length);

  if (!lengthOfMail && calculate.length >= 5 && check.length < 4) {
    alert("VALID MAIL!");
  } else {
    alert("Invalid Mail");
  }
};

acceptEmail();
