<script setup>
import { ref, watch } from 'vue'
//This tells the app what data to expect
defineProps({
question: String,
answer1: String,
answer2: String
})
//the code down below emits a signal that the parent can see and respond to similar to G-Script
const emit = defineEmits([
  'choice-selected'
])
const choice = ref(null)//Makes the users choice reactive
//Down below is an alternative way to make the app react to user selection
/* function choiceMade(){
  //emit event to tell parent the user has mad a choice.
emit('choice-selected', choice.value)
  console.log(choice.value)
  //this allows would you rather to send messages to its parent
} */

//Tells the App what exactly to look for when it comes to component emition 
watch(choice, () =>{
emit('choice-selected', choice.value)

})

</script>

<template>
<!--the code dwon below sets a div as would you rather and print make your choice to the page -->
  <div id="wyr"> 
 <h2>Make your choice!</h2>

<h3> {{ question }}</h3>
 <!--Note!!|| V-bind needs to be at the start of the script with the rest of the blue text-->
  <div> <!--THe methdod of getting radio buttons to work is differnt from javascript you need to use V-model in order for it to work with Vue correctly-->
<input v-model="choice" v-bind:value="answer1" v-on:change="choiceMade" type="radio" id="awnser-1" >
<label for="answer-1"> {{ answer1 }} </label>
<!-- V-bind:value is how vue makes radio buttons function correctly(makes them select and unselect correctly)-->
<input v-model="choice" v-bind:value="answer2" v-on:change="choiceMade"    type="radio" id="answer-2">
<label for="answer-2"> {{ answer2 }}</label>
  </div>
</div>
 </template>
<!--down below contains visual changes that are kept locally to this specific text file -->
<style scoped> 
#wyr {
  background-color: burlywood;
}

p{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
}

</style>
