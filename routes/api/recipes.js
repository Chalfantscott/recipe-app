var express = require('express');
var router = express.Router();
const models = require('../../models');

router.post('/save', function(req, res, next) {
    console.log(req.body)
    models.Recipe.create(req.body)
    .then(()=>{
        res.json({status: 'successfully created recipe'})
    })
});
router.get('/list', function(req, res, next) {
    models.Recipe.findAll().then(recipe => {
        res.json(recipe)
    }).catch(err => {
        console.error(err)
    })
})





module.exports = router;