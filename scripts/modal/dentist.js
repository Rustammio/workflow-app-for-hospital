import {basicModalInstance} from "./form_modal.js"
export const createDentistInstance = () =>{
    basicModalInstance()
    const dentistInstance = document.querySelector(".create_form")
    dentistInstance.insertAdjacentHTML("beforeend", `
        <div>        
        <label for="">last visit date</label>
        <input type="text" name = "last_visit_date">
        </div>
    `)
    const createdButton = document.querySelector(".btn_wrapper")
    console.log(createdButton);
    dentistInstance.append(createdButton)


}