const express = require('express')

const router = express.Router()
const randomWYRQuestions = require('../model/wyr-questions')

router.get('/', function(req, res,next){
    res.send('Placeholder for the home page')
})
router.get('/wyr', function(req, res,next){ //api router is accesiable here
/*     const wyr = {
    'question': 'would you rather live in a Desert or a Tundra',
    'answer1' : 'Desert',
    'answer2' : 'Tundra'
    } */
    const wyr = randomWYRQuestions()
    res.json(wyr)
})

module.exports = router