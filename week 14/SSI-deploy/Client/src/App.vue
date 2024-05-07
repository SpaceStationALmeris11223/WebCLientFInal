<script setup>

import { onMounted } from 'vue'//on nounted is a function that is automatically called when a component is first loaded and shown on screen

import NewStudentForm  from './components/NewStudentForm.vue'
import StudentTable from './components/StudentTable.vue'
import StudentMessage from './components/StudentMessage.vue'

import { useStudentStore } from './Stores/StudentStore';

//code here
const StudentStore = useStudentStore()
onMounted( () =>{
    //whatever is in here will run the moment the app is launched remember this
    StudentStore.getAllStudents()
})

</script>

<template>

    <!--HTML template here-->
<!--You can reorder the table by moving around the components below this text-->
<NewStudentForm>  </NewStudentForm>
<StudentTable>  </StudentTable>
<StudentMessage>  </StudentMessage>
<!--You can reorder table by moving around the components above this text-->

</template>


<style scoped>

/*css for thid componet here*/
</style>