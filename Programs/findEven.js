function findEvenNum(){
var newArr =[];
    let arr = [11,57,35,90,80,40,87,90,45,77,99,23,56,100];
    arr.filter((item)=>{
        if(item%2===0){
            console.log(item);
            newArr.push(item);
        }
    })
    // console.log(arr);
    
    return newArr;


}
findEvenNum();


// continue and break 
// break is keyword in cnditional statements it is used to break the loop or to exit the loop.
// continue is keyword in conditional statements it is used to skip the particular iteration in the loop, it does not exit the loop.

function check(){
    var newArr =[];
    let arr = [11,57,35,90,80,40,87,90,45,77,99,23,56,100];
    for (let i of arr){
        if(i%2!==0){
          
           continue; // it will skip perticular iteration 
        }
        newArr.push(i)
        if(newArr.length===3){
            break;
        }
        console.log(newArr);
    }

   


}
check();