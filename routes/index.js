var express = require('express');
var router = express.Router();
var unirest = require('unirest');
const RapidAPI = new require('rapidapi-connect');
const rapid = new RapidAPI('recipe-app-dc_5b60f46ae4b00e56954289b1', '/connect/auth/recipe-app-dc_5b60f46ae4b00e56954289b1');
var axios = require('axios');

router.get('/recipes', function(req, res, next) {
  axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?number=1&tags=vegetarian%2Cdessert')
  	.then(({data})=>{
  		res.json(data);
  	}).catch((error)=>{
      res.status(500).send(error)
    });

});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
