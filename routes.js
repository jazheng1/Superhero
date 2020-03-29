let Router = require('express-promise-router');
let router = new Router();

let getHeroes = require('./research/getHeroes');
let Superhero = require('./models/Superhero');


router.get('/', async(request, response) => {


  response.render('main', { });
});

router.get('/search', async(request, response) => {
  let searchTerm = request.query.term;
  console.log('Searching heroes with term: ' ,searchTerm);

  let heroes = await Superhero.query()
    .where('name', 'ilike', `%${searchTerm}%`);

  console.log(heroes);
  response.render('main', { heroes, searchTerm });

});

module.exports = router;
