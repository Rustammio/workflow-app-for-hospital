import { logIn } from "./api/log_in.js";

import LoginModal from "./classes/class_modal/login_class_modal.js"
import {selectModal} from "./modal/modal.js"
import { createDentistInstance } from "./modal/dentist.js"
import { createCardiologistInstance } from "./modal/cardiologist.js"
import { createTherapistInstance } from "./modal/therapist.js"

const loginButton = document.getElementById('button_login')
const signWrapper = document.querySelector(".modal_wrapper") 

loginButton.addEventListener('shown.bs.modal', () => {
    const signWrapper = document.querySelector(".modal_wrapper")
    new LoginModal("1", "User login", "Sign in", "Cancel").createElements(signWrapper)   
    
})
signWrapper.addEventListener('click', (e) =>{
    const sign = document.querySelector('.sign')
    if(e.target === sign){
        // logIn()
        console.log("hi");
    }
})




// const selectModal = document.querySelector(".select_doctor")

// selectModal.addEventListener("change", (e) => { 
            
//         switch (e.target.value) {
//             case "dentist": createDentistInstance()
//                 break;
//             case "cardiologist": createCardiologistInstance()
//                 break;
//             case "therapist": createTherapistInstance()
//                 break;
//             default: console.log("uncorrect value");
//                 break;
//         }
    

// })
