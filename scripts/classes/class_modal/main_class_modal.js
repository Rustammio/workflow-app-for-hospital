export default class Modal{
    
 constructor(id, title, btnAccept, btnCancel){
      this.id = id;
     this.title = title;
     this.btnAccept = btnAccept;
     this.btnCancel = btnCancel;
     
     this.modalElement = document.createElement('div');
     this.modalDialog = document.createElement('div');
     this.modalContent = document.createElement('div');
     this.modalBody = document.createElement('div');
     this.modalFooter = document.createElement('div');
     
 }
 createElements(container){
   
    this.modalElement.classList.add('modal', 'fade')
    this.modalElement.id = `Modal${this.id}`
    this.modalElement.setAttribute('tabindex',`-1`)
    this.modalElement.setAttribute('aria-labelledby',`ModalLabel${this.id}`)
    this.modalElement.setAttribute('aria-hidden',`true`)
    this.modalElement.setAttribute('data-bs-backdrop',`true`)
    this.modalDialog.classList.add("modal-dialog", "modal-dialog-centered")
    this.modalContent.classList.add("modal-content")    
    this.modalContent.insertAdjacentHTML('afterbegin', `
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabel${this.id}">${this.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>`)
     this.modalBody.classList.add("modal-body")
      this.modalFooter.classList.add("modal-footer")
      this.modalFooter.insertAdjacentHTML('beforeend',`
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${this.btnCancel}</button>
        <button type="button" class="btn btn-primary">${this.btnAccept}</button>
      </div> 
      `)
       this.modalElement.append(this.modalDialog) 
       this.modalDialog.append(this.modalContent)
      this.modalContent.append(this.modalBody)
      this.modalContent.append(this.modalFooter)
      container.append(this.modalElement)

 }
    

}

// const test = new Modal(1, "login", "Sign in", "Cancel").createElements()
// export {test}