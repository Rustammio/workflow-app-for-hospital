import Modal from "./main_class_modal.js"

export default class CreateModal extends Modal {
    constructor(url, title, yes, no){
        super(title,yes, no)
        this.url = url
        this.modalForm = document.createElement("form")
        this.selectDoctors = document.createElement("div")   

    }

    createElements(container) {
        super.createElements(container)
        this.modalForm.setAttribute("action", `${this.url}`)
        // this.modalForm.setAttribute("method", "POST")
        this.modalForm.classList.add("create_form")
        this.selectDoctors.insertAdjacentHTML("afterbegin", `
            <label for="doctors">select doctor</label>   
            <select name="doctors" id="">
            <option value="select_doctor">select doctor</option>
            <option value="cardiologist">Cardiologist </option>
            <option value="dentist">Dentist</option>
            <option value="therapist">Therapist</option>
        </select>
        `)
        this.modalForm.append(this.selectDoctors)        
        this.contentWrapper.append(this.modalForm)       
        
        // this.modalForm.prepend(this.buttonWrapper)
    }


}





