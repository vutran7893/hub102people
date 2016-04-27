Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('persons'); }
});
Router.onBeforeAction('dataNotFound', {only: 'personPage'});
Router.route('/', {name: 'personsList'});
Router.route('/persons/:_id', {
  name: 'personPage',
  data: function() { return Persons.findOne(this.params._id); }
});