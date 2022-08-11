import {basicModalInstance} from "./form_modal.js"
import {createInput} from "../util/create_input.js"
export const createDentistInstance = () =>{
    basicModalInstance()
    const dentistInstance = document.querySelector(".client-healthy")
    const dentistArray = ['last visit']

    createInput(dentistArray, dentistInstance)
//     dentistInstance.insertAdjacentHTML("beforeend", `
//     <div class="input-group mb-3">
//   <input type="text" class="form-control" placeholder="last visit date" aria-label="last visit date" aria-describedby="basic-addon2">
//   <span class="input-group-text" id="basic-addon2">last visit date</span>
// </div>        
//     `)

}