import { clearForm } from './clear_form.js'

export const closedModalForm = () =>{
    const exitButton = document.querySelector(".exit_button")
    const containerForm = document.querySelector('.card-container')

    exitButton.addEventListener("click", () =>{
        // clearForm();
         const selectModal = document.querySelector(".select_doctor")
        selectModal.options[0].selected = true;

        const clearMod = document.querySelector(".client-healthy")
        if (clearMod !== null) {
            clearMod.innerHTML = ""
        }

        // containerForm.innerHTML = "";
    })
}