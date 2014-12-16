// Example Published Count
//Meteor.publish('user_count', function() {
//  if (Roles.userIsInRole(this.userId, 'admin')) {
//    Counts.publish(this, 'user_count', Users.find());
//  } else {
//    this.stop();
//  }
//});

//Example Publication
//Meteor.publish('singleUser', function(id) {
//  check(id, String);
//  if (Roles.userIsInRole(this.userId, 'admin')) {
//    return Users.find({_id:id});
//  } else {
//    this.stop();
//    return;
//  }
//});
