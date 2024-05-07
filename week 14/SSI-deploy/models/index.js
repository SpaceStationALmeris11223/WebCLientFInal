const {Sequelize, DataTypes } = require('sequelize')
const configJson = require('../config.json')
const createStudentModel = require('./students.js')

//look for enviorment variuable and read its value said enviorment will  be called node
//enviorment variables are set for your whole computer or sever
//any application running on this computer/sevrer can read these enviorment variables
//Azure will create a env variable called NODE_ENV and set it to production
const env = process.env.NODE_ENV|| "development" //second half of this code says if NODE_ENV 
//is not found it will set the Env to the value of development
const config = configJson[env] 
//the line above reads the configuratoon objectg for development or production based on what the env value is


const dbPassword = process.env.DB_PASSWORD
const sequelize = new Sequelize(config)

config.password = dbPassword
const database = {
    sequelize: sequelize,//This is the object that has the config of how to connect to the database
    Sequelize: Sequelize//This is the Sequlize library
}

const studentModel = createStudentModel(sequelize, DataTypes)
const studentModelName = studentModel.name//students name
database[studentModelName] = studentModel
//database is going to add a new property to the db object called studentModelName and its set to the model that created via studentModel

module.exports = database
//i spent a couple hours on a syntax error T_T development wasn't spelled the same in package.json