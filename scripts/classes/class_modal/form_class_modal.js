import Modal from "./main_class_modal.js"

export default class CreateModal extends Modal {
  constructor(idButton, title, Accept, Cancel) {
    super(idButton, title, Accept, Cancel)
    this.selectDoctors = document.createElement("div")
    this.clientHealthy = document.createElement("div")

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
    this.buttonCancel.classList.add('exit_button')

    this.modalBody.append(this.selectDoctors)
  }

  createInput = (arrayOptions) => {

    arrayOptions.forEach(field => {
      const clientHealthyItem = document.createElement("div")
      clientHealthyItem.classList.add('input-group', 'mb-3')
      clientHealthyItem.insertAdjacentHTML('beforeend', `
        <input type="text" class="form-control" placeholder=${field} aria-label=${field} aria-describedby="basic-addon2" required>
        <span class="input-group-text" id="basic-addon2">${field}</span>
        `)

      this.clientHealthy.append(clientHealthyItem)
    })
  }

  basicModalInstance(arrayHealthyOptions) {

    this.clientHealthy.classList.add("client-healthy")

    this.createInput(arrayHealthyOptions)

    this.clientHealthy.insertAdjacentHTML("beforeend", `
     <select class="form-select form-select select_form" aria-label=".form-select-sm urgen">
     <option selected>urgency</option>
     <option value="High">High</option>
     <option value="Normal">Normal</option>
     <option value="Low">Low</option>
     </select> 
     `)

    this.modalBody.append(this.clientHealthy)
  }

  createDentistInstance(arrayHealthyOptions, dentistArray) {
    this.basicModalInstance(arrayHealthyOptions)
    this.createInput(dentistArray)
  }

  createCardiologistInstance = (arrayHealthyOptions, cardioArray) => {

    this.basicModalInstance(arrayHealthyOptions)
    this.createInput(cardioArray)
  }

  createTherapistInstance(arrayHealthyOptions, therapistArray) {

    this.basicModalInstance(arrayHealthyOptions)
    this.createInput(therapistArray)
  }

  clearForm() {

    this.clientHealthy.innerHTML = ""
  }

}

const container = document.querySelector(".modal_form_wrapper")
const testModal = new CreateModal("2", "Create form", "Create", "Exit")
const formModal = testModal.createElements(container)

export { formModal, testModal }



