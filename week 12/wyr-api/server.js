const express = require('express')

const indexRouter = require('./routes/index')

const app = express()

app.use('/', indexRouter) // says sends all of the reqest to indexRouter So it can deal with it.

const server = app.listen(process.env.PORT || 3000,function(){
    console.log('Server runnning on port ', server.address().port)
})