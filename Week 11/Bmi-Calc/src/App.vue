<script setup>

import BMIInputs from './components/BMIInputs.vue';
import {useBmiStore} from './Store/BMI-Stores'
import {storeToRefs} from 'pinia'

const bmiStore = useBmiStore()
let {bmiValue} = storeToRefs(bmiStore)

</script>

<template>


<BMIInputs> </BMIInputs>
Your BMI is:  {{ bmiValue}}


</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
