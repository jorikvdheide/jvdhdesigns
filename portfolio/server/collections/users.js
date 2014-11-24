insertUsers=function(){
  var adminId=Accounts.createUser({
    email:"info@jvdhdesigns.nl",
    password:"Jurk-123"
  });
  //
  Roles.addUsersToRoles(adminId,"admin");
};