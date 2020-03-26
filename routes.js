let fs = require('fs');
let Router = require('express-promise-router');
let router = new Router();


let text = fs.readFileSync('./data/all-heroes.json', 'utf-8');
let info = JSON.parse(text);
console.log(Object.keys(info));

let arrayOfHeroes = info.results;

router.get('/', async(request, response) => {
  // let firstHero = arrayOfHeroes.splice(1);
  // console.log(firstHero);
  // for (item in firstHero) {
  //   if (firstHero.hasOwnProperty(item)) {
  //     console.log(item,': ', typeof firstHero[item]);
  //   }
  // }
  let arrayToShow = arrayOfHeroes.slice(0,2);
  console.log(arrayToShow);
  response.render('main', { arrayToShow });
});

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
