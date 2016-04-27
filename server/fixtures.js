if (Persons.find().count() === 0) {
  Persons.insert({
    title: 'Tran Duc Vu ',
    facebook: 'https://www.facebook.com/tranducvu',
    name: 'David'
  });

  Persons.insert({
    title: 'Nguyen Son Tung ',
    facebook: 'https://www.facebook.com/stefanhip.1?fref=ts',
    name: 'Stefan'
  });

  Persons.insert({
    title: 'Dong Xuan Thuy ',
    facebook: 'https://www.facebook.com/Thuy.DongXuan?fref=ts',
    name: 'Nick'
  });
}