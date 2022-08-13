import Modal from "./main_class_modal.js"

export default class CreateModal extends Modal {
  constructor(id, title, Accept, Cancel) {
    super(id, title, Accept, Cancel)
    this.selectDoctors = document.createElement("div")
  }

  createElements(container) {
    super.createElements(container)
    this.modalElement.classList.add("modal_form")
    this.modalBody.classList.add("create_form")

    this.selectDoctors.insertAdjacentHTML("afterbegin", `
        <select class="form-select  select_doctor form-select select_form" aria-label=".form-select-lg" size="1">
        <option selected >select doctor</option>
        <option value="cardiologist">Cardiologist</option>
        <option value="dentist">Dentist</option>
        <option value="therapist">Therapist</option>
      </select>  
        `)

    this.buttonAccept.classList.add("submit")
    // this.buttonAccept.setAttribute("data-bs-toggle", "modal")
    // this.buttonAccept.setAttribute("data-bs-target", "#Modal2")

    this.modalBody.append(this.selectDoctors)
  }
}

const container = document.querySelector(".modal_form_wrapper")
const formModal = new CreateModal("2", "Create form", "Create", "Exit").createElements(container)

export { formModal }



