<script setup>
import { useStudentStore } from '../Stores/StudentStore';
import { storeToRefs } from 'pinia';

const studentStore = useStudentStore()

const {mostRecentStudents} = storeToRefs(studentStore)
//code here

</script>

<template>
<div id="welcome-or-goodbye-message" class="m-2">
    <div v-if="mostRecentStudents.name">

        <div v-if="mostRecentStudents.present" class="alert alert-success">
                {{mostRecentStudents.name}}  has arrived
        </div>
        <div v-else class="alert alert-danger">
            {{mostRecentStudents.name }} has departed
        </div>
    </div>
            <!-- TODO show a message when student arrives or leaves  -->
            
</div>
    <!--HTML template here-->
StudentMessage
</template>

<style scoped>

/*css for thid componet here*/
</style>