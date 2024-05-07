const express = require('express')
const apiRoutes = require('./routes/api')

const app = express()

app.use(express.json())

app.use('/api',apiRoutes) 

app.use(function(req,res,next){
    //can find matching route error handler
    res.status(404).send('Sorry route not found (check URl for spelling errors)')
})


//javascript can tell the difference between a a function with 3 paramaters and 4 parameters
app.use(function( err, req, res, next, ){//How much does the (err,req,res,next) order matter
    console.log(err.stack)
    res.status(500).send('Server error')
})


const server = app.listen(process.env.PORT || 3000, function(){
    console.log('Express server runnning on port', server.address().port)
})//when azure runs your app azure will decide what port it needs to be run on



