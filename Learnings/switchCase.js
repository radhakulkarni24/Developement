//Switch case
// function switchCase(){

//     //accept age from use
//     const age = parseInt(prompt("enter the age of user"));
//     switch(age){
//         case age:

//         break;
//         case(age>11 && age<=20):{
//             console.log("user is teenage");
//         }
//         break;
//         case(age>21 && age<=30):{
//             console.log("user is adult");
//         }
//         break;
//         case(age>31 && age<=40):{
//             console.log("user is old");
//         }
//         break;
//         default:{
//             console.log("cannt say anything about usr!");
//         }
//     }

// }
// switchCase();

// function ratingAll(){

//     let rating=1;
//     switch(rating){
//         case 1:if(rating===1){
//             console.log("very bad!!!!");
//         }
//         // break;
//         case 2:if(rating===2){
//             console.log("avarage!!!!");
//         }
//         // break;
//         case 3:if(rating===3){
//             console.log("good!!!!");
//         }
//         // break;
//         case 4:if(rating===4){
//             console.log("better!!!!");
//         }
//         // break;
//         default:console.log("invalid");

//     }

// }
// ratingAll();

function checkReminder(num) {
  let result = num % 4;
  //wnat to check the reminder of this when its 0 or 1 print first 2 when we have 2,3 reminder we want to print last two
  switch (result) {
    case 0:
      console.log("First two");
      break;
    case 1:
      console.log("First two");
      break;
    case 2:
      console.log("Last two");
      break;
    case 3:
      console.log("Last two");
      break;
  }
}
checkReminder(8);
