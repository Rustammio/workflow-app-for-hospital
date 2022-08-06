import {logIn} from "./api/log_in.js";
import CreateModal from "./classes/class_modal/class_form_modal.js";

import {basicModalInstance} from "./modal/form_modal.js"
import{createDentistFields} from "./modal/dentist.js"
const sign = document.querySelector('.sign')

sign.addEventListener('click', logIn)

// 
const modalContainer = document.querySelector(".modal-dialog")

const testModal = new CreateModal("https://ajax.test-danit.com/api/v2/cards","create visit", "Submit", "Cancel").createElements(modalContainer)

const formModal = document.querySelector(".create_form")
formModal.addEventListener("change", (e) => {

        basicModalInstance()

        switch(e.currentTarget.value){
            case "dentist": createDentistFields()
        }
    // }
})