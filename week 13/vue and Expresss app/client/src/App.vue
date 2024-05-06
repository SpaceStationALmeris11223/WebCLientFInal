<script setup>
import { onMounted, ref } from 'vue'//ref will make your app reactive
//The code down below sets up both the questions and its anwsers

import WouldYouRather from './components/WouldYouRather.vue' //makes this App.vue a component of WouldYouRather
import wyrService from './services/wyrService.js'





const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')

// this will store the users answer once they made their choice
const userSelection = ref('')

//on mounted can call a function when a componnet is first loaded
onMounted( () =>{//this section calls the function definition
  wyrService.getRandomWYR().then( (wyrData)=>{
//expect to be something like
//Question: Would you rather live in a deepsea  station or in a space station?
//Anwser1: Deep sea station?
//Anwser2: Space station
wyrQuestion.value = wyrData.question
wyrAnswer1.value = wyrData.answer1
wyrAnswer2.value = wyrData.answer2

  })
})


//This line of code prints out the users choice as well as additional dialog to make the app appear friendly 
function updateUserSelection(userChoice){
  userSelection.value = `Hmmmm so, you chose ${userChoice}`
}


</script>
<!--Down below post Would You Rather in big text-->
<template>
  <div id="app-component">  </div>
<h1>Would You Rather?</h1>
<!--down below connects Vue to the questions amd the answers-->
<WouldYouRather 
v-bind:question="wyrQuestion" 
v-bind:answer1="wyrAnswer1"
v-bind:answer2="wyrAnswer2"
v-on:choice-selected="updateUserSelection">
</WouldYouRather>
<!--what follows (=) in a v-bind sends data to the parent file
 what follows (:) in a v-bind sends refers to the name of the prop and the child-->


<p>{{ userSelection }}</p> <!--prints the user selection in its own paragraph-->
</template>
<!--Down below styles the app localy(the css changes will only occur in this component)-->
<style scoped>
#app-component{
  font-size: 3em;
  background-color: tomato;
}
p{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans' ;
}
</style>
