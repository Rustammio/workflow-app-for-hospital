export default class Modal {

  constructor(id, title, Accept, Cancel) {
    this.id = id;
    this.title = title;
    this.Accept = Accept;
    this.Cancel = Cancel;

    this.modalElement = document.createElement('div');
    this.modalDialog = document.createElement('div');
    this.modalContent = document.createElement('div');
    this.modalBody = document.createElement('div');
    this.modalFooter = document.createElement('div');
    this.buttonAccept = document.createElement('button')
    this.buttonCancel = document.createElement('button');

  }
  createElements(container) {

    this.modalElement.classList.add('modal', 'fade')
    this.modalElement.id = `Modal${this.id}`
    this.modalElement.setAttribute('tabindex', `-1`)
    this.modalElement.setAttribute('aria-labelledby', `ModalLabel${this.id}`)
    this.modalElement.setAttribute('aria-hidden', `true`)
    this.modalElement.setAttribute('data-bs-backdrop', `true`)

    this.modalDialog.classList.add("modal-dialog", "modal-dialog-centered")
    this.modalContent.classList.add("modal-content")
    this.modalContent.insertAdjacentHTML('afterbegin', `
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabel${this.id}">${this.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>`)

    this.modalBody.classList.add("modal-body")
    this.modalFooter.classList.add("modal-footer")

    this.buttonAccept.setAttribute("type", "button")
    this.buttonAccept.classList.add("btn", "btn-outline-light", "back")
    this.buttonAccept.innerText = `${this.Accept}`

    this.buttonCancel.setAttribute("type", "button")
    this.buttonCancel.setAttribute("data-bs-dismiss", "modal")
    this.buttonCancel.classList.add("btn", "btn-secondary")
    this.buttonCancel.innerText = `${this.Cancel}`

    this.modalFooter.append(this.buttonCancel)
    this.modalFooter.append(this.buttonAccept)

    this.modalElement.append(this.modalDialog)
    this.modalDialog.append(this.modalContent)

    this.modalContent.append(this.modalBody)
    this.modalContent.append(this.modalFooter)
    container.append(this.modalElement)

  }
}

