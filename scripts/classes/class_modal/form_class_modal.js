import Modal from "./main_class_modal.js"
export default class CreateModal extends Modal {
    constructor(id, title, Accept, Cancel){
        super(id, title, Accept, Cancel)              
        // this.arrayHealthyOptions = ["purpose of the visit", "description problem", "name"]      
        this.selectDoctors = document.createElement("div")
        // this.clientHealthy = document.createElement("div")         
        // this.clientHealthyItem = document.createElement("div")
    }

    createElements(container) {        
      super.createElements(container)
        this.modalBody.classList.add("create_form")      
       
        this.selectDoctors.insertAdjacentHTML("afterbegin", `
        <select class="form-select  select_doctor form-select" aria-label=".form-select-lg" size="1">
        <option selected >select doctor</option>
        <option value="cardiologist">Cardiologist</option>
        <option value="dentist">Dentist</option>
        <option value="therapist">Therapist</option>
      </select>  
        `)
        // this.clientHealthy.classList.add("client-healthy")
        this.modalBody.append(this.selectDoctors)
        // this.modalBody.append(this.clientHealthy)       
     
    }
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
}

const container = document.querySelector(".modal_form_wrapper")
const test2 = new CreateModal("2", "Create form", "Submit", "Exit").createElements(container)
console.log(test2);
export {test2}



