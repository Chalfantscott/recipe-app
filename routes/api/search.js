const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
    if (req.query.query && req.query.number) {
        axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=${req.query.number}&query=${req.query.query}`,
            {
                headers: {
                    "X-Mashape-Key": process.env.API_KEY
                }
            }
        )
        .then(result => {
            res.json(result.data)
         })
         .catch((error) => {
            res.json(error)
         })
    } else {
        res.json({ 'error': 'please define a search query or a number of results.' });
    }  
});

module.exports = router;