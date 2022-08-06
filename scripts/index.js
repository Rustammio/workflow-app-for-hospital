import { logIn } from "./api/log_in.js";
import CreateModal from "./classes/class_modal/class_form_modal.js";


import { createDentistInstance } from "./modal/dentist.js"
import { createCardiologistInstance } from "./modal/cardiologist.js"
import { createTherapistInstance } from "./modal/therapist.js"
const sign = document.querySelector('.sign')

sign.addEventListener('click', logIn)


const modalContainer = document.querySelector(".modal-dialog")

const testModal = new CreateModal("https://ajax.test-danit.com/api/v2/cards", "create visit", "Submit", "Cancel").createElements(modalContainer)

const selectModal = document.getElementById("select_doctor")
console.log(selectModal);
selectModal.addEventListener("change", (e) => {
    console.log(document.querySelector(".history_wrapper"));
    const clearMod = document.querySelector(".history_wrapper")
    if (clearMod !== null) {
        clearMod.remove()
    } 

        debugger
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