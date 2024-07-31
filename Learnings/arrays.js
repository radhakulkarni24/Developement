// In JS, array is hetregeneous in nature and accepts different type of elements in an array.
//array index always starts with 0

function add(a, b) {
  console.log(a + b);
  return a + b;
}

var z = add(10, 20);

function createArray() {
  //method-1 = array of string
  const arr = ["hello", "hey", "hi"];
  console.log(arr);

  const addArray = [1, 2, 3];

  //method-2
  const arr2 = new Array(
    {
      id: 1,
      name: "radha",
      age: 27,
      addArray,
      z,
    },
    {
      id: 2,
      name: "radha1",
      age: 26,
      addArray,
      z,
    }
  );
  console.log(arr2);

  //method three - array of objects
  const objArray = [
    {
      id: 1,
      name: "radha",
      age: 27,
    },
    {
      id: 2,
      name: "radha1",
      age: 26,
    },
  ];
  console.log(objArray);
}

createArray();
