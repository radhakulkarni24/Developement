function convertTemp(temp) {
  let result;
  const celcius = ((temp - 32) * 5) / 9;

  if (celcius >= 37) {
    //toFixed method - used to decide how much degits we want after decimal point. It is used with floating points
    result = `you have got a fever:- ${celcius.toFixed(2)}`;
    console.log(result);
  } else if (celcius < 37) {
    result = `you don't have a fever,${celcius.toFixed(1)}`;
    console.log(result);
  } else {
    console.log(`invalid`);
  }
  return result;
}

convertTemp(100);
convertTemp(20);
