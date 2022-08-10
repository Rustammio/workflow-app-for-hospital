import { test2 } from "../classes/class_modal/form_class_modal.js"
import CreateModal from "../classes/class_modal/form_class_modal.js"
export  const basicModalInstance = () =>{
       const arrayHealthyOptions = ["purpose visit", "description problem", "name"]     
      const clientHealthy = document.createElement("div")
      clientHealthy.classList.add("client-healthy")

      arrayHealthyOptions.forEach(field =>{
        const clientHealthyItem = document.createElement("div") 
          clientHealthyItem.classList.add('input-group', 'mb-3')
          clientHealthyItem.insertAdjacentHTML('beforeend',`
          <input type="text" class="form-control" placeholder=${field} aria-label=${field} aria-describedby="basic-addon2">
          <span class="input-group-text" id="basic-addon2">${field}</span>
          `)
          clientHealthy.append(clientHealthyItem)})
//      clientHealthy.insertAdjacentHTML("afterbegin", 
//      `
 
//  <div class="input-group mb-3">
//   <input type="text" class="form-control" placeholder="the purpose of the visit" aria-label="Recipient's username" aria-describedby="basic-addon2">
//   <span class="input-group-text" id="basic-addon2">the purpose of the visit</span>
// </div>
// <div class="mb-3">
//   <label for="description_problem" class="form-label">description of the problem</label>
//   <textarea class="form-control" id="description_problem" rows="3"></textarea>
// </div>
// <select class="form-select form-select-sm" aria-label=".form-select-sm urgently">
// <option selected>urgently</option>
// <option value="routine">routine</option>
// <option value="priority">priority</option>
// <option value="urgent">urgent</option>
// </select> 
// <div class="input-group mb-3">
//     <input type="text" class="form-control" placeholder="name" aria-label="name" aria-describedby="basic-addon2">
//     <span class="input-group-text" id="basic-addon2">name</span>
//   </div>
//      `) 
   
     const formBody = document.querySelector(".create_form")
     formBody.append(clientHealthy)
}
// this.arrayHealthyOptions = ["purpose of the visit", "description problem", "name"] 
// this.clientHealthy = document.createElement("div")         
        // this.clientHealthyItem = document.createElement("div")
 // createClientHealthyElement(){
    //   // this.createElements(container)
    // this.arrayHealthyOptions.forEach(field =>{
    //   this.clientHealthyItem.classList.add('input-group', 'mb-3')
    //   this.clientHealthyItem.insertAdjacentHTML('beforeend',`
    //   <input type="text" class="form-control" placeholder=${field} aria-label=${field} aria-describedby="basic-addon2">
    //   <span class="input-group-text" id="basic-addon2">${field}</span>
    //   `)
    //   this.clientHealthy.append(this.clientHealthyItem)
    // })
    // }