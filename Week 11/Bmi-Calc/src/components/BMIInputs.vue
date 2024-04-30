<script setup>
import {useBmiStore} from '../Store/BMI-Stores.js'
import {storeToRefs} from  'pinia'


const bmiStore = useBmiStore
const{height, weight} = storeToRefs(bmiStore)


</script>

<template>



<div id ="bmi">
<h2>Please enter you weight & height in the fields below </h2>
<h3>This app will convert negative numbers into positive</h3>

<div>

    <label for="your-height">Enter your height in meters   </label>
    <input min="0" v-model="height" id="your-height" name="your-height" type="number">
    <br>
    <label for="your-weight">Enter your weight in kilograms  </label>
    <input min="0" v-model="weight" id="your-weight" name="your-weight" type="number">


</div>


</div>

</template>


<style scoped>





</style>