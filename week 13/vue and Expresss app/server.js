const express = require('express')
const path = require('path')
const indexRouter = require('./routes/index')

const app = express()

                               // find client ffolder , find dist file
const staticFilePath = path.join(__dirname, 'client', 'dist')
const staticFiles = express.static(staticFilePath)
app.use('/', staticFiles) //static files are vue client
//while they're "active" they don't change


app.use('/', indexRouter) // says sends all of the reqest to indexRouter So it can deal with it.

const server = app.listen(process.env.PORT || 3000,function(){
    console.log('Server runnning on port ', server.address().port)
})