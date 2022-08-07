import User from '.././classes/user.js'
import Modal from '.././classes/class_modal.js'

export const selectModal = document.querySelector(".select_doctor")

selectModal.addEventListener("change", (e) => {
   
    const clearMod = document.querySelector(".history_wrapper")
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
            default: console.log("uncorrect value");
                break;
        }
    

})