import { test2 } from "../classes/class_modal/form_class_modal.js"
import CreateModal from "../classes/class_modal/form_class_modal.js"
export  const basicModalInstance = () =>{
           
      const clientHelthy = document.createElement("div")
      clientHelthy.classList.add("client-healthy")
     clientHelthy.insertAdjacentHTML("afterbegin", 
     `
 
 <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="the purpose of the visit" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2">the purpose of the visit</span>
</div>
<div class="mb-3">
  <label for="description_problem" class="form-label">description of the problem</label>
  <textarea class="form-control" id="description_problem" rows="3"></textarea>
</div>
<select class="form-select form-select-sm" aria-label=".form-select-sm urgently">
<option selected>urgently</option>
<option value="routine">routine</option>
<option value="priority">priority</option>
<option value="urgent">urgent</option>
</select> 
<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="name" aria-label="name" aria-describedby="basic-addon2">
    <span class="input-group-text" id="basic-addon2">name</span>
  </div>
     `) 
   
     const formBody = document.querySelector(".create_form")
     formBody.append(clientHelthy)
}