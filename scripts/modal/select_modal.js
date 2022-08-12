import {createDentistInstance} from "./dentist.js"
import {createCardiologistInstance} from "./cardiologist.js"
import {createTherapistInstance} from "./therapist.js"

export const selectedOption = ()=>{
 const selectModal = document.querySelector(".select_doctor")

selectModal.addEventListener("change", (e) => {
   
    const clearMod = document.querySelector(".client-healthy")
    
    if (clearMod !== null) {
        clearMod.remove()
    }         
        switch (e.target.value) {
            case "dentist": createDentistInstance()
                break;
            case "cardiologist": createCardiologistInstance()
                break;
            case "therapist": createTherapistInstance()
                break;
            default: console.log("value not selected");
                break;
        }


})
}