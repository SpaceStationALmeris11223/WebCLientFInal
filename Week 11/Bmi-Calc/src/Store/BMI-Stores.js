import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useBmiStore = defineStore('bmi', () => {//Needs a name 'bmi' and the const to function setup



// I ran into a issue where these variables wont transfer with their value intact current time spent  bugfixing 4hours T_T


const height = ref(1.5)
const weight = ref(55) 

const bmiValue = computed ( () => {
    return weight.value /(height.value * height.value)
})

//Why doen't they keep their values when used in the components??????????? 


return {//need a return statement in order to transfer  the variables frrom the store with their value intact

    height,
    weight,
    bmiValue,
}


//
//unfortunatly due to time constrainst I have to give up on this program
// No matter what I tried I couldn't get these variables to transfer with their value intact the moment I tried it only returns NaN
//this was the last thing i needed to figure out but oh well 
// the program won't work but I couldnt find an awnser, I asked google, friends, I even went full hail mary and asked chat gpt if it knew how
// unfortunatly I couldn't find a solution
//upside i feel like I know how to use Pinia to create a larger program, with the exception of exporting variables


})