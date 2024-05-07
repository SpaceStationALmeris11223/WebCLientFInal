const express = require('express')
const database = require('../models/index')
const students = require('../models/students')
//will require the index.js file from this directory
const Student = database.Student// the student model

const router = express.Router()

router.get('/students', function(req, res, next){
    //query databe, get all rows from DB,
    //Convert to Json form
    //available in the then function
    Student.findAll({order:['name']}).then(students => {
        return res.json(students)
    })
})

//using the same name helps describe the function to api so we don't need to change the name
router.post('/students', function(req,res,next){
    const newStudent = req.body// req.body is whatever data the clinet sends
    console.log('newStudent')
    Student.create(newStudent).then ( result => {
        return res.status(201).send('New student created')
    }).catch(err=>{
        //status code for bad request - user sent invalid data-client error
        if (err instanceof database.Sequelize.ValidationError) {
            const messages = err.errors.map (e => e.message)
//the code above says that error is an array and get every message out of it
         return res.status(400).json(messages)
        }else {
            next(err)
        }
    })//server should alway respond so others can figure out what went wrong
})


//colon acts like a place holder
router.patch('/students/:id', function(req,res,next){
    //matches request to students/1 2 4 etc
    //req.params stores the id value
    //stores any placeholder in the url

    const studentID = req.params.id
    const updateStudent = req.body //updates data about this student
    Student.update( updateStudent, {where: {id: studentID}}).then( (result) =>{
       
        //id doens't exist
       const rowsModified = result[0]
       //if one row was changed we found the sudent and they were updates
       if(rowsModified ===1){
        return res.send('Ok')
       } else {
        //if 0 rows were updated
        return res.status(404).send(' Student not found')
       }



        res.send('ok')// status is 200 by default
    }).catch(err =>{

        //invalid data
        if (err instanceof database.Sequelize.ValidationError) {
            const messages = err.errors.map (e => e.message)
//the code above says that error is an array and get every message out of it
         return res.status(400).json(messages)
        }else {
            next(err)
        }
    })
   // will only update the student id that we just read for, the req

    //what are some hypothetical errors
    //| database issue| |



})


router.delete('/students/:id', function(req,res,next){
    const studentID= req.params.id//delete request to api/ students id
    Student.destroy({where:{id: studentID} } ).then ( (rowsDeleted) =>{
        if (rowsDeleted === 1){
            return res.send('Student deleted')
        } else {//if 0 row are deleted the app will inform the user that the student isnt there
            return res.status(404).send('Student not found')
        }
    }).catch( err => {
        return next(err)//no need to deal with validation let server js handle it
    })
})



module.exports = router