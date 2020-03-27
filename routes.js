let Router = require('express-promise-router');
let router = new Router();

let getHeroes = require('./research/getHeroes');
let Superhero = require('./models/Superhero');


router.get('/', async(request, response) => {

  let arrayOfHeroes = getHeroes('./data/all-heroes.json');
  let arrayToShow = arrayOfHeroes.slice(0,2);
  console.log(arrayToShow);
  response.render('main', { arrayToShow });
});

router.post('/search', async(request, response) => {
  let searchTerm = request.body.term;
  console.log(searchTerm);
  let heroes = await Superhero.query()
    .where('name', searchTerm);

  console.log(heroes);
  response.render('main', { heroes });


})

/* router.post('/messages', async(request, response) => {

  let hero =

  try {
    await Message.query().insert({
      body: messageBody,
    });

    response.redirect('/');
  } catch(error) {
    if (error instanceof ValidationError) {
      let messages = 'There is an error';
      let errors = error.data;

      response.render('main', { arrayOfHeroes, errors });
    } else {
      throw error;
    }
  }
});
 */
module.exports = router;
