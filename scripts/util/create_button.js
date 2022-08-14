import { formModal } from "../classes/class_modal/form_class_modal.js";

export const createdButton = () => {

    const buttonCreate = document.getElementById("signIn")

    buttonCreate.setAttribute("data-bs-target", "#Modal2")
    buttonCreate.setAttribute("type", "button")

    buttonCreate.innerText = "Create card";
    buttonCreate.addEventListener("click", () => {
        formModal
        const selectModal = document.querySelector(".select_doctor")
        selectModal.options[0].selected = true;
        const clearMod = document.querySelector(".client-healthy")

        if (clearMod !== null) {
            clearMod.remove()
        }
        
    })
}
