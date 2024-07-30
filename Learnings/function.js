//function defination
function defineFN() {
  let uname = "radha";

  return uname;
}
defineFN();

// function with parameter or argument
function fnWithParameter(uname) {
  uname = prompt("enter name");
  console.log(uname);
}
// fnWithParameter(uname);
/*Error- The issue in the provided code is that the function fnWithParameter is 
being called with an undefined variable uname. When you call fnWithParameter(uname);,
uname is not defined in the current scope, leading to an error.Additionally,
within the function, the parameter uname is being reassigned with the result of the prompt function,
which negates the purpose of passing a parameter.*/

//To solve the above issue either we can go with two options
/*accept user input from prompt
or pass the value manually from function call*/

//function declaration
function processVaribale() {
  var input = prompt("enter the value");

  while (input === "") {
    alert("inputshould not be empty");
    input = prompt("enter the value");
  }

  alert("input-" + input);
  return input;
}

processVaribale();

function sumAll() {
  console.log("hey there!!");
  return;
  console.log("seee");
}
sumAll();

//Default parameter
function defaultParam(a = 5,b=5) {
  //template litreals
  a=9;
  const out = `add strings ${a + b}`;
  console.log(out);
  return out;
}

defaultParam();

var c = defaultParam();
console.log("return",c);


//if we take multiple numbers of value with return it will give us the last one value in the statement.
function takeName(){
return "radha",1,true;
}
var s= takeName();
console.log("name",s);
