function accessRoles(role, exp) {
  let access;
  switch (role) {
    case "Manager":
      access = "Full Access";
      break;
    case "Supervisor":
      var result = exp >= 5 ? "Full Access" : "Partial Access";

      //    if(exp>=5){
      //     access="Full Access";
      //    } else{
      //     access="Partial Access";
      //    }
      break;
    case "Associate":
      exp >= 4 ? "Partial Access" : "Limited Access";
      // if(exp>=3){
      //     access="Partial Access";
      // }else{
      //     access="Limited Access";
      // }
      break;
    case "Other":
      exp >= 2 ? "Limited Access" : "Trainee Access";
      // if(exp>=2){
      //     access="Limited Access";
      // }else{
      //     access="Trainee Access";
      // }
      break;

    default:
      console.log("invalid");
  }
  return result;
}
console.log(accessRoles("Supervisor", 6));
