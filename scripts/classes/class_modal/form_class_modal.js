
export default class CreateModal extends Modal {
    constructor(url, id, title, btnAccept, btnCancel){
        super(id, title, btnAccept, btnCancel)
        this.url = url        
        this.modalForm = document.createElement('form')        
        
        this.selectDoctors = document.createElement("div")
        this.modalFooter = document.createElement("div")   

    }

    createElements() {        
        this.modalForm.setAttribute("action", `${this.url}`)
        this.modalForm.setAttribute("method", "POST")
        this.modalForm.classList.add("create_form")

        this.modalFooter.classList.add("d-flex", "form_footer", "modal-footer")
        this.modalFooter.insertAdjacentHTML("beforeEnd", `
           
                        <button type="button" class="btn btn-secondary"
                        data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-light btn-primary submit_btn">Submit</button>

        `)
        
        this.selectDoctors.insertAdjacentHTML("afterbegin", `
        <select class="form-select  select_doctor form-select-lg" aria-label=".form-select-lg" size="1">
        <option selected autofocus>select doctor</option>
        <option value="cardiologist">Cardiologist</option>
        <option value="dentist">Dentist</option>
        <option value="therapist">Therapist</option>
      </select>  
        `)

        this.modalForm.prepend(this.selectDoctors)        
        this.modalForm.append(this.modalFooter)          
        const formContainer = document.querySelector(".modal-body")
           formContainer.append(this.modalForm)
    }
       

}





