
    // accept only positive numbers
    //as soon as user accept any negative number exit the loop
    var sum = 0;
    var num = prompt("enter number...");
    while(num !== '-1'){
      
        sum += Number(num); //sum = sum+num --0=0+1 sum= 1 // 2!==-1 sum= 1+2=3// 4!==-1 sum=3+4=7 //-1!==-1 (loop exist)
        num=prompt("accept next num...");
    }
   alert(sum);

