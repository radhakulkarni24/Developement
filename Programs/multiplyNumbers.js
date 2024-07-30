function multipleAllnum(){
let product=1;
var arr = [1, 5, 70, -2, -1, -0.5];
const len = arr.length;     
console.log("length--:",len);//6
for(i=0;i<len;i++){
    product *= arr[i] ;
}  
console.log(product);

}
multipleAllnum()