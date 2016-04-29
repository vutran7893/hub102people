Persons = new Mongo.Collection('persons');

Meteor.methods({
  postInsert: function(postAttributes) {
    check(this.userId, String);
    check(postAttributes, {
      url: String,
      email: String,
      viname: String,
      engname: String,
      phone: String
    });

    var postWithSameLink = Persons.findOne({url: postAttributes.url});
    if (postWithSameLink) {
      return {
        postExists: true,
        _id: postWithSameLink._id
      }
    }

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id, 
      author: user.username, 
      submitted: new Date()
    });

    var postId = Persons.insert(post);

    return {
      _id: postId
    };
  }
});