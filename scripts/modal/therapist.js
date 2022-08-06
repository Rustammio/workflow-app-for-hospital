import {basicModalInstance} from "./form_modal.js"
export const createTherapistInstance = () =>{
    basicModalInstance()
    const therapistInstance = document.querySelector(".history_wrapper")
    therapistInstance.insertAdjacentHTML("beforeend", `
    <div>
    <label for="">age</label>
    <input name ="client_age" type="text">
    </div>
    `)
    const createdButton = document.querySelector(".btn_wrapper")
    console.log(createdButton);
    therapistInstance.after(createdButton)
}