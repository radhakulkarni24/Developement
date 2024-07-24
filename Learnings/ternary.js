function checkTernary() {
  //ternary operators are short form of if-else in one line it needs to have true expression as well as false expression.
  let age = 10;
  const check = age > 5 ? "true" : "false";
  console.log(check);

  let num1 = 20;
  let num2 = 30;
  //nested ternary operator

  const nested = num1 > num2 ? num1 : num2 === num1 ? "equal" : num2;
  console.log(nested);

  let a = "K123.234.46747";
  console.log(parseFloat(a));

  let x = "4";
  let y = "3";
  const result = ++x + y--;
  console.log(result);
  console.log(typeof result);
}
checkTernary();
