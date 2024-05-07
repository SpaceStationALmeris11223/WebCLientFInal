<script setup>
//Code that connects the componets
import {useStudentStore} from '../Stores/StudentStore.js'
import {storeToRefs} from 'pinia'
import {computed} from 'vue'
import StudentRows from './StudentRows.vue';

const studentStore = useStudentStore()

const {sortedStudents, studentCount} = storeToRefs(studentStore)
//Code that connects the componets ^
//code here

const deleteStudent = (student) => {
  studentStore.deleteStudent(student)
}

const arrivedOrLeft = (student, isStudentPresent) => {
  student.present= isStudentPresent
  studentStore.arrivedOrLeft(student)
}
const pluralStudentMessage = computed( ()=> {
  if (studentCount.value === 1) {
      return 'There is 1 student in class'
    } else {
      return `there are ${studentCount.value} students in class ` 
    }
})

</script>

<template>


<h1>I start here</h1>
<div id="student-list-table" class="card m-2 p-2">
    <h4 class="card-title">Student List</h4>
    <h5 class="card-subtitle text-muted">{{ pluralStudentMessage }}</h5>

    
  <div id="student-table">
      <table class="table">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>StarID</th>
                  <th>Present?</th>
                  <th>Delete</th>
              </tr>
          </thead>

          <tbody>
            <StudentRows
              v-for="student in sortedStudents"
              v-bind:student-ob="student"
              v-on:arrived-or-left="arrivedOrLeft"
              v-on:delete-Student="deleteStudent"
              > <!--WHen working with props you use V-bind
                          Prop-  |Value 
                       student-ob|student -->
          
            </StudentRows>
          </tbody>

      </table>
  </div>
</div>
    <!--HTML template here-->
</template>

<style scoped>
#student-table {
  max-height: 400px;
  overflow: scroll;
}

th, tr, td {
  width: 25%;
}

li{ 
  text-align: left;
}

/*css for thid componet here*/
</style>