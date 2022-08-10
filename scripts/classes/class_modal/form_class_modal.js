import Modal from "./main_class_modal.js"
export default class CreateModal extends Modal {
    constructor(id, title, Accept, Cancel){
        super(id, title, Accept, Cancel)              
               
        this.selectDoctors = document.createElement("div")         

    }

    createElements(container) {        
      super.createElements(container)
        this.modalBody.classList.add("create_form")      
       
        this.selectDoctors.insertAdjacentHTML("afterbegin", `
        <select class="form-select  select_doctor form-select-lg" aria-label=".form-select-lg" size="1">
        <option selected >select doctor</option>
        <option value="cardiologist">Cardiologist</option>
        <option value="dentist">Dentist</option>
        <option value="therapist">Therapist</option>
      </select>  
        `)
        
        this.modalBody.append(this.selectDoctors)        
           
       
    }
    

}

const container = document.querySelector(".modal_form_wrapper")
const test2 = new CreateModal(2, "Create form", "Submit", "Exit").createElements(container)
console.log(test2);
export {test2}



