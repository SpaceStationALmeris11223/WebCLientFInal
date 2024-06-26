const express = require('express')
const router = express.Router()//figures out what code to run, the response depends on the type of request

//responds to request to homepage
//router.get('/', == get request to homepage
router.get('/', function(req, res, next){
     res.render('index', { title: 'BMI Calculator'})
    // request, response, next| req == request, res == response| next can pass the request if the current function can't deal with it 
    // name of handlebars file - name of the template,| optional object with data

})
router.get('/Bmi-Calc', function(req, res, next){
    res.render('bmi-Calc.hbs')
})

module.exports = router //return this router obj to whaterver needs this file
//this file must always be at the bottom