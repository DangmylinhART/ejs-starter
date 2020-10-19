const router = require('express').Router();

router.get('/', (req, res) => {
  //   res.send('Now its time for the view');

  return res.render('main/index');
});

router.get('/p/:dog/:cat', (req, res) => {
  let car = req.query.search;
  let dog = req.params.dog;
  let cat = req.params.cat;
  return res.render('main/index', { myDog: dog, myCat: cat, myCar: car });
});

router.get('/loop', (req, res) => {
  let places = [
    { city: 'Stamford', state: 'CT' },
    { city: 'New York', state: 'NY' },
    { city: 'Danbury', state: 'CT' }
  ];
  return res.render('main/index', { myPlaces: places });
});

router.get('/about', (req, res) => {
  return res.render('main/about');
});

module.exports = router;
