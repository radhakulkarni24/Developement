 function gradeSystem(mark){

    let result;
    if(mark>=90){
        result = "Grade A";
        console.log(result);
    }else if(mark>=80 && mark<=89){
        result = "Grade B";
        console.log(result);
    }else if(mark>=70 && mark<=79){
        result = "Grade C";
        console.log(result);
    }else if(mark>=60 && mark<=69){
        result = "Grade D";
        console.log(result);
    }else if(mark<60){
        result = "Grade F";
        console.log(result);
    }

 } 
 gradeSystem(93);  //A
 gradeSystem(85);  //B
 gradeSystem(75);   //C
 gradeSystem(65);   //D
 gradeSystem(55);   //F