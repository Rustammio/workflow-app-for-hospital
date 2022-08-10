import CreateModal from "../classes/class_modal/form_class_modal.js";
import { test2 } from "../classes/class_modal/form_class_modal.js";
import {HideModal} from "./remove_modal.js"
export const createdButton = () => {
    const buttonLogin = document.querySelector(".back");
    
    buttonLogin.remove();
    HideModal()
    const buttonCreate = document.createElement("button")
    buttonCreate.classList.add("btn", "btn-outline-light", "back", "create_button")
    const buttonNav = document.getElementById("navbar");
    buttonCreate.setAttribute("data-bs-toggle","modal")
    buttonCreate.setAttribute("data-bs-target","#Modal2")
    buttonCreate.setAttribute("type","button")

    buttonCreate.innerText = "Create card";
    buttonNav.append(buttonCreate)  
   
    const btn = document.querySelector(".create_button")
    
    btn.addEventListener('shown.bs.modal',() =>{
       test2
       
        console.log(test2);
       })
}
