// function discountOffer(amount){

//     let discount;
//     if(amount<500){
//         discount="no discount";
//         console.log(discount);
//     }else if(amount>=500 && amount<1000){
//         discount="10% discount";
//         console.log(discount);
//     }else if(amount>=1000 && amount<2000){
//         discount ="20% discount";
//         console.log(discount);
//     }else if(amount>=2000 && amount<4000){
//         discount = "30% discount";
//         console.log(discount);

//     }else if(amount>=4000 && amount<5000){
//         discount="40% discount";
//         console.log(discount);
//     }else{
//         console.log("invalid");
//     }

// }
// discountOffer(3600);

function switchDiscount(amt) {
  let dis;

  switch (true) {
    case amt < 500:
      dis = "no discount";
      break;
    case amt >= 500 && amt < 1000:
      dis = "10%";
      break;
    case amt >= 1000 && amt < 2000:
      dis = "20%";
      break;
    case amt >= 2000 && amt < 3000:
      dis = "30%";
      break;
    case amt >= 3000 && amt < 4000:
      dis = "40%";
      break;
    default:
      "no match";
  }
  return dis;
}
console.log(switchDiscount(2500));
