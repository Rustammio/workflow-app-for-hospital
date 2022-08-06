import Modal from "./main_class_modal.js"

export default class CreateModal extends Modal {
    constructor(url, title){
        super(title)
        this.url = url
        this.modalForm = document.createElement("form")
        this.selectDoctors = document.createElement("div")

    }

    createElements(container) {
        super.createElements(container)
        this.modalForm.setAttribute("action", `${this.url}`)
        this.modalForm.setAttribute("method", "POST")
        this.selectDoctors.insertAdjacentHTML("afterbegin", `
        <label for="doctor">select doctor</label>   
        <select name="doctor" id="">
            <option value="cardiologist">Cardiologist </option>
            <option value="dentist">Dentist</option>
            <option value="therapist">Therapist</option>
        </select>
        `)
        this.modalForm.append(this.selectDoctors)

        this.contentWrapper.append(this.modalForm)
    }
}