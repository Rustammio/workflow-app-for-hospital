import { clearForm } from './clear_form.js'

export const closedModalForm = () =>{
    const exitButton = document.querySelector(".exit_button")
    const containerForm = document.querySelector('.card-container')

    exitButton.addEventListener("click", () =>{
        clearForm();
        containerForm.innerHTML = "";
    })
}