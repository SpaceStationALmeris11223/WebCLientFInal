<script setup>
import { storeToRefs } from 'pinia';
import {ref, watch} from 'vue'
const props = defineProps({
    studentOb: Object
})



const emit = defineEmits([ 'arrived-or-left', 'delete-student'])

const {addNewStudentErrors} = storeToRefs(storeToRefs)

watch( addNewStudentErrors, () =>{
    //this function will do somehtin every time addNewStudentErrors changes
    if(addNewStudentErrors.value && addNewStudentErrors.value.length > 0){
        alert(addNewStudentErrors.value.join('\n'))
    }
})
const isStudentPresent = ref(props.studentOb.present)
//Const below emits a message to it's parent infroming it that a student arrived or left
const notifyArrivedOrLeft = () =>{
    //needs g
    emit('arrived-or-left', props.studentOb, isStudentPresent.value)
}

const deleteStudents = () => {
emit('delete-student', props.studentOb)
}//were doing this because we can have lot if poiteintal students if there's a lot of students to work 
//with this componet will say who needs to be deleted of the the list of students
</script>

<template>

<tr class="align-middle" v-bind:class="{present: studentOb.present, absent: !studentOb.present}">
    <td>{{studentOb.name}}</td>
    <td>{{studentOb.starID}}</td>
    <!--to do add Vmodel- checkbox?-->
    <td> 
        <input type="checkbox" v-model="isStudentPresent" v-on:change="notifyArrivedOrLeft(studentOb)">
        <!--in the code above V-on:change is used to create a function called arrived or left. Which uses student to tell whose checkbox  was checked-->
        <span v-if="studentOb.present" class="mx-3">Present!</span>
        <span v-else class="mx-3">Not present</span>
    </td><!-- add checkbox-->
    <td>
        <button v-on:click="deleteStudents" class="btn btn-danger">
            <i class="bi bi-trash2"></i>Delete?</button>
    </td><!-- add delete button-->
</tr>


</template>

<style scoped>
.present {
  color: gray;
  font-style: italic;
}

.absent {
  color: black;
  font-weight: bold;
}
</style>