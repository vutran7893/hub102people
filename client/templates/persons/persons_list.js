var personsData = [
  {
    title: 'Tran Duc Vu ',
    // url: 'http://sachagreif.com/introducing-telescope/',
    name: 'David'
  }, 
  {
    title: 'Nguyen Son Tung ',
    // url: 'http://meteor.com',
    name: 'Stefan'
  }, 
  {
    title: 'Nguyen Phu Thien ',
    // url: 'http://themeteorbook.com ',
    name: 'Tony'
  },
  {
    title: 'DonG Xuan Thuy ',
    // url: 'http://themeteorbook.com',
    name: 'Nick'
  }
];
Template.personsList.helpers({
  persons: personsData
});