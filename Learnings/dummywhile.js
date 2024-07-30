var sum = 0;
var input = prompt('Enter a number, -1 to exit.');

while (input !== '-1') {
   sum += Number(input);
   input = prompt('Enter a number, -1 to exit.');
}

alert(`The sum is ${sum}.`);