Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      viname: $(e.target).find('[name=viname]').val(),
      engname: $(e.target).find('[name=engname]').val(),
      email: $(e.target).find('[name=email]').val(),
      phone: $(e.target).find('[name=phone]').val()

    };

    Meteor.call('postInsert', post, function(error, result) {
      // display the error to the user and abort
    if (error)
        return alert(error.reason);
    if (result.postExists)
        alert('This link has already been posted');

      Router.go('personPage', {_id: result._id});  
    });
  }
});