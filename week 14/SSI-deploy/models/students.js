

module.exports = (sequelize,DataTypes) => {
    //defines model
    const Student = sequelize.define('Student', {
        //DEFINES The comlumns in the database - give them a name and type
        name:{
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                notEmpty: false
            }
        },
        starID: {
            type: DataTypes.STRING,
            allowNull:false,
            unique: true,
            validate: {
                notEmpty: false
            }
            //need to make sure star id are valid and not duplicates
        },
        present:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            default: false
        },
    })
    //creaes br update table in the database
    Student.sync({force: false}).then( ()=>{
        console.log('Synced student table')
    })//returns a promise and if promise works console.log synced plays
    return Student
}