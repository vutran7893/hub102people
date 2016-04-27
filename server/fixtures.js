if (Persons.find().count() === 0) {
  Persons.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Persons.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Persons.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}