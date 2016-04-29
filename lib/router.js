Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('persons'); }
});
var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}
Router.route('/', {name: 'personsList'});
Router.route('/persons/:_id', {
  name: 'personPage',
  data: function() { return Persons.findOne(this.params._id); }
});
Router.route('/submit', {name: 'postSubmit'});
Router.onBeforeAction('dataNotFound', {only: 'personPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
