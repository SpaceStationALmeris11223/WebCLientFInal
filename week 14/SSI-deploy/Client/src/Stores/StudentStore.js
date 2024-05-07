import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import { mande } from 'mande'

const studentAPI = mande('api/students')//this is why we use the same name for all the api request it makes it more concice 
export const useStudentStore = defineStore('students', () =>{
    const sortedStudents = ref([               ])

    const mostRecentStudents = ref({})


    function getAllStudents() {
    //make an api request to get all students and save them in studentlist
    studentAPI.get().then( student => {//students is the resonse of the api
        sortedStudents.value = student
    }).catch(err =>{
        console.log(err)
    })
}//I just realized how clutter my code looks because of the notes i wonder if theres a method wehre i can take my notes and make the code less awful to look at

/*  const sortedStudents = computed( () => {
        return studentList.value.toSorted( (student1, student2) => {
            return student1.name.localeCompare(student2.name)
        })
    }) down below became redundant due to the api doing the same thing in api.js selectAll({order:name}*/
    function addNewStudent(student){// if we want to add a student make this an api request
         /*    studentList.value.push(student) this is the orginal add student method of the app */
            studentAPI.post(student).then( () =>{
                getAllStudents()//this is called when the api call is completed(this is assuming data has been added tot he database)
            })//once the changes are made this will make anohter request to up
            //data with the latest version of said  data
        }

    function deleteStudent(studentToDelete){//if we want to delete a student this needs to be a api request
    {}//makes sure that if someone is deleted it won't say hi X(it acknowledges the person left)
       const deleteStudentapi = mande(`/api/students/${studentToDelete.id}`)
        deleteStudentapi.delete().then( () => {
            getAllStudents()
        }).catch(err =>{
            console.log(err)
        })
    }
//this functionis reactive
    function arrivedOrLeft(student){//make this function an api request
        const editStudentAPi = mande(`/api/students/${student.id}`)
        editStudentAPi.patch(student).then( () =>{
            getAllStudents()
        }).catch(err =>{
            console.log(err)
        })
        //matches the request we made in api.js
    }

    const studentCount = computed (() =>{
        return sortedStudents.value.length
     })  

    return{
        //reactive
        mostRecentStudents,
        sortedStudents,
        //functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,
        getAllStudents,
        //Computed properties

        studentCount,
    }
})