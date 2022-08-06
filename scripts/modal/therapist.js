import {basicModalInstance} from "./form_modal.js"
export const createTherapistInstance = () =>{
    basicModalInstance()
    const therapistInstance = document.querySelector(".create_form")
    therapistInstance.insertAdjacentHTML("beforeend", `
    <div>
    <label for="">age</label>
    <input name ="client_age" type="text">
    </div>
    `)
}