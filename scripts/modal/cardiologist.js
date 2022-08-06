import {basicModalInstance} from "./form_modal.js"
export const createCardiologistInstance = () =>{

  basicModalInstance()
  const cardioInstance = document.querySelector(".create_form")
  
  cardioInstance.insertAdjacentHTML("beforeend", `
  <div>
  <label for="">normal pressure</label>
  <input type="number" name ="pressure">
</div>
<div>
  <label for="">body mass index</label>
  <input type="number" name ="mass">
</div>
<div>
  <label for="">past diseases of the cardiovascular system</label>
  <input type="text" name = cardio_diseases>
</div>
<div>
  <label for="">age</label>
  <input type="text" name = "client_age">
</div>
  `)
  
}