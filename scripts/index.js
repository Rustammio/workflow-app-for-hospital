import { logIn } from "./api/log_in.js";
import CreateModal from "./classes/class_modal/class_form_modal.js";


import { createDentistInstance } from "./modal/dentist.js"
import { createCardiologistInstance } from "./modal/cardiologist.js"
import { createTherapistInstance } from "./modal/therapist.js"
const sign = document.querySelector('.sign')

sign.addEventListener('click', logIn)





const selectModal = document.querySelector(".select_doctor")

selectModal.addEventListener("change", (e) => { 
            
        switch (e.target.value) {
            case "dentist": createDentistInstance()
                break;
            case "cardiologist": createCardiologistInstance()
                break;
            case "therapist": createTherapistInstance()
                break;
            default: console.log("uncorrect value");
                break;
        }
    

})
