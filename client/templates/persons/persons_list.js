Template.personsList.helpers({
  persons: function() {
    return Persons.find({}, {sort: {submitted: -1}});
  }
});