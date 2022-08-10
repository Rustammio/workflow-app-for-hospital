import {basicModalInstance} from "./form_modal.js"
export const createCardiologistInstance = () =>{

  basicModalInstance()
  const cardioInstance = document.querySelector(".client-healthy")
  
  
  cardioInstance.insertAdjacentHTML("beforeend", `
  <div class="row g-3">
  <div class="input-group col mb-3">
  <input type="text" class="form-control" placeholder="normal pressure" aria-label="normal pressure" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2">normal pressure</span>
</div>
<div class="input-group col mb-3">
<input type="text" class="form-control" placeholder="body mass index" aria-label="body mass index" aria-describedby="basic-addon2">
<span class="input-group-text" id="basic-addon2">body mass index</span>
</div>
</div>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="past diseases of the cardiovascular system" aria-label="past diseases of the cardiovascular system" aria-describedby="basic-addon2">
<span class="input-group-text" id="basic-addon2">cardiovascular diseases</span>
</div>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="age" aria-label="client_age" aria-describedby="basic-addon2">
<span class="input-group-text" id="basic-addon2">age</span>
</div>
  `)
  
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