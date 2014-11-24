// always start from scratch (you will want to comment this line at some point !)
Meteor.users.remove({});
if(Meteor.users.find().count()===0){
  insertUsers();
}