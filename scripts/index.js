import { logIn } from "./api/log_in.js";
import CreateModal from "./classes/class_modal/class_form_modal.js";
import Modal from "./classes/class_modal/main_class_modal.js"
// import {test} from "./classes/class_modal/main_class_modal.js"
import {test2} from "./classes/class_modal/form_class_modal.js"

import { createDentistInstance } from "./modal/dentist.js"
import { createCardiologistInstance } from "./modal/cardiologist.js"
import { createTherapistInstance } from "./modal/therapist.js"

// const sign = document.getElementById('button_login')
// console.log(sign);
// const test = new Modal(1, "login", "Sign in", "Cancel").createElements()
const sign = document.querySelector('.sign')
sign.addEventListener('click', logIn)

// sign.addEventListener('click', ()=>{
//     // const test = new Modal(1, "login", "Sign in", "Cancel").createElements()
//    test2.show()
    
// })



const selectModal = document.querySelector(".select_doctor")

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
