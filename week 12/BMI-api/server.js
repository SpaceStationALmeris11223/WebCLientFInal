const express = require('express') // require takes place of import in js libraries
const path = require('path')//used to connecton locations on your computer to find the files


const indexRouter = require('./routes/index.js')

const app = express()// create the web application server

//enables parsing of POST request body



app.set('views', path.join(__dirname, 'views'))//__dirname = the directory where the data is stored ( think cd/ in cmd)
//     the file name ------------------>where that file is
app.set('view engine', 'hbs')//uses handlebars to generate views

app.use('/', indexRouter)// all request to app will be passed to indexRouter


//start the server runiing| .listen == listening for request
const server = app.listen(process.env.PORT || 3000, function() {
//the code above says if told to use a specific port use it, otherwise use 3000
    console.log('server running on port', server.address().port)
})


//web app server will decide what port to use
