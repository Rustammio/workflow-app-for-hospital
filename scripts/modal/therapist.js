import {basicModalInstance} from "./form_modal.js"
export const createTherapistInstance = () =>{
    basicModalInstance()
    const therapistInstance = document.querySelector(".form_footer")
    therapistInstance.insertAdjacentHTML("beforeBegin", `
    <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="age" aria-label="age" aria-describedby="basic-addon2">
    <span class="input-group-text" id="basic-addon2">age</span>
  </div>
    
    `)    
}