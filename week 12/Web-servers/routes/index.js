//creates a router for the server to use 
const express = require('express')
const router = express.Router() //figures out what code to run in response to reqest
//usually based on the url and the method, GEt, post ,etc

//responds to ger request to homepage
router.get('/', function(req, res, next){// request, response, next| req == request, res == response| next can pass the request if the current function can't deal with it 
  // name of handlebars file - name of the template,| optional object with data
    res.render('index', {title: 'Feedback Application'})// res.render== generates some html
}) // (the index in question is index.hbs) this is a GET request to home page| '/' == homepage

module.exports = router // returns this router object to whatever requires this file