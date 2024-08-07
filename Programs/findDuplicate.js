
let arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr){

    // wnats to store the result in an array duplicate values 
    const duplicateArr=[];

    //wnats to compare weather values to check weather they are duplicate or not 
    //loop over an array 
    for(let i = 0 ; i< arr.length; i++){
        for( let j = i+1; j<arr.length ;j++){
            if(arr[i]===arr[j] && !duplicateArr.includes(arr[i])){
                duplicateArr.push(arr[i]);
            }
        }
    }
    return duplicateArr;
}
console.log(findDuplicate(arr));