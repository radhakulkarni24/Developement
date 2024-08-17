 
 function add(){
    var sum=0;
    var arr = [ 1, 4, 5, 2, 4];
    for(var i = 0; i<arr.length;i++){
       
        sum = sum+ arr[i];
    
        console.log(sum); //1,5,10,12,16
        console.log("i",i);
     
    }
    return sum;

 }

 add();


 //while loop 
 //print numbers f1 1 to 10
function whileLoop(){

    var arr = [];
    let i = 0;
    num = 10;
    while(i<num){
        console.log("print i=",i)
        // const newArr=arr.push(i);
        i++;
        // console.log(newArr);
       
        

    }

}
whileLoop();

//function expression 
function abc(a,b){

    return a+b  // when function returns somthing we can write function expression 
}

var b = abc(2,4); // function expression  
console.log(b);


