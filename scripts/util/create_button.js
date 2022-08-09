import CreateModal from "../classes/class_modal/form_class_modal.js";
import { test2 } from "../classes/class_modal/form_class_modal.js";
export const createdButton = () => {
    const buttonLogin = document.querySelector(".back");
    console.log(buttonLogin);
    buttonLogin.remove();
    const buttonCreate = document.createElement("button")
    buttonCreate.classList.add("btn", "btn-outline-light", "back", "create_button")
    const buttonNav = document.getElementById("navbar");
    buttonCreate.setAttribute("data-bs-toggle","modal")
    buttonCreate.setAttribute("data-bs-target","#Modal2")
    buttonCreate.setAttribute("type","button")
//     buttonWrapper.insertAdjacentHTML("beforeend", `
//     <button
//     type="button"
//     class="btn btn-outline-light back"
//     data-bs-toggle="modal"
//     data-bs-target="#Modal2"
//     id="button_create"   
// >
// Create card
// </button>
    // `);
    buttonCreate.innerText = "Create card";
    buttonNav.append(buttonCreate)  
    // console.log(buttonCreateCard);
    // buttonCreateCard.addEventListener("click", ()=>{
    //     const testModal = new CreateModal("https://ajax.test-danit.com/api/v2/cards", "create visit", "Submit", "Cancel").createElements(modalContainer)

// })
    const btn = document.querySelector(".create_button")
    
    btn.addEventListener('shown.bs.modal',() =>{
        new CreateModal("2", "Create form", "Submit", "Exit").createElements(document.querySelector(".modal_form_wrapper"))
        
       })
}
