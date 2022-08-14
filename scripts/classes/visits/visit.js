import Modal from "../class_modal/main_class_modal.js";
// import {createDentistInstance} from "../../modal/dentist.js";
// import {createCardiologistInstance} from "../../modal/cardiologist.js";
// import {createTherapistInstance} from "../../modal/therapist.js";

// import {formModal} from "../class_modal/form_class_modal";
export default class Visit {
    constructor(id, purpose, description, doctor, name, urgency, status, open = openDialogModal, del = deleteVisit, edit = editVisit){
        this.id = id;
        this.doctor = doctor;
        this.name = name;
        this.purpose = purpose;
        this.description = description;
        this.urgency = urgency;
        this.status = status;
        this.openDialogModal = openDialogModal;
        this.deleteVisit = deleteVisit;
        this.editVisit = editVisit;

        this.cardCol = document.createElement('div');
        this.cardCol.setAttribute('class', 'col');

        this.card = document.createElement('div');
        this.card.setAttribute('class', 'card');
        this.cardBody = document.createElement('div');
        this.cardBody.setAttribute('class', 'card-body');

        this.fullCard = document.createElement('div');
        this.infoPatient = document.createElement('ul')
        this.divButtons = document.createElement('div');
        this.divButtons.setAttribute('class', 'div-buttons')

        this.deleteButton = document.createElement('button');
        this.deleteButton.setAttribute('class', 'btn-close btn-close-white');
        this.deleteButton.setAttribute('type', 'button');
        this.deleteButton.setAttribute('data-bs-toggle', 'modal');
        this.deleteButton.setAttribute('data-bs-target', '#modalDialogDelete');


        this.showMoreButton = document.createElement('button');
        this.showMoreButton.setAttribute('class', 'btn btn-outline-light');
        this.showMoreButton.setAttribute('type', 'button');
        this.showMoreButton.textContent = 'SHOW MORE';

        this.hideButton = document.createElement('button');
        this.hideButton.setAttribute('class', 'btn btn-outline-light');
        this.hideButton.setAttribute('type', 'button');
        this.hideButton.textContent = 'HIDE';
        this.hideButton.style.display = 'none';


        this.adjustButton = document.createElement('button');
        this.adjustButton.setAttribute('class', 'btn btn-outline-light');
        this.adjustButton.setAttribute('type', 'button');
        this.adjustButton.textContent = 'ADJUST';
        this.adjustButton.setAttribute('data-bs-toggle', 'modal');
        this.adjustButton.setAttribute('data-bs-target', '#Modal2');

        this.deleteButton.addEventListener('click', this.openDialogModal.bind(this));
        this.showMoreButton.addEventListener('click', this.showMore.bind(this));
        this.hideButton.addEventListener('click', this.hide.bind(this));
        this.adjustButton.addEventListener('click', editVisit.bind(this))
        // }))


    }

    buildingCard(){
        const container = document.querySelector('.card-container')
        container.append(this.cardCol)
        this.cardCol.setAttribute('id',`${this.id}`)
        this.cardCol.append(this.card)
        this.card.append(this.cardBody)
        this.cardBody.prepend(this.deleteButton)
        this.cardBody.insertAdjacentHTML(`beforeend`, `
        <h3 class="card-title">${this.name}</h3>
        <h3 class="card-title">${this.doctor}</h3>`)
        this.cardBody.append(this.fullCard)
        this.cardBody.append(this.divButtons)
        this.divButtons.append(this.adjustButton)
        this.divButtons.append(this.showMoreButton)
        this.divButtons.append(this.hideButton)
        console.log(this.fullCard)
    }

    showMore(){
        this.fullCard.insertAdjacentHTML('beforeend', `
             <h5 class="card-title">${this.purpose}</h5>
             <p class = "card-text">${this.description}</p>
             <p class = "card-text">${this.urgency}</p>
             <h6 class ="card-title">Additional information about the patient:</h6>
        `)
        this.fullCard.append(this.infoPatient)
        this.showMoreButton.style.display = 'none';
        this.hideButton.style.display = 'block';
    }


    hide(){
        this.fullCard.innerHTML ='';
        this.infoPatient.innerHTML ='';
        this.showMoreButton.style.display = 'block';
        this.hideButton.style.display = 'none';
    }

    delete(){

        // this.cardCol.remove()
        // this.deleteModalBtn = document.querySelector("#deleteModalBtn")

        // this.deleteModalBtn.addEventListener('click', deleteThisCard(this.id))

    }
    // this.cardCol.remove()
    //IMPORTANT
    // const token = localStorage.getItem('token')
    // fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
    //     method: 'DELETE',
    //     headers: {
    //         'Authorization': `Bearer ${token}`
    //     },
    // })
    //     .then(response => response.status)
    //     .then(data => {
    //         if('200'){
    //             this.card.remove()
    //         }
    //     })
    //


    adjust(){

    }
}
function openDialogModal(){
    this.modalDialogDeleteText = document.querySelector('.modal-dialog-delete-text')
    this.modalDialogDeleteText.innerHTML =
        `<p> ${this.name} will not see a ${this.doctor}.<br> Are you sure?</p>`
    this.modalDialogDeleteFooter = document.querySelector('.modal-dialog-delete-footer')
    this.modalDialogDeleteFooter.innerHTML =
        `<button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">CLOSE</button>
    <button type="button" class="btn btn-outline-light dialog-delete"  data-bs-dismiss="modal">I\`m sure, DELETE</button>`
    this.modalDialogDeleteBtn =document.querySelector('.dialog-delete')
    this.modalDialogDeleteBtn.addEventListener('click', this.deleteVisit.bind(this))
}

function deleteVisit(){
    // this.cardCol.remove()
    const token = localStorage.getItem('token')
    fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })
        .then(response => response.status)

        //response response.json()

        .then(data => {
            if('200'){
                const dataLocalStorage = JSON.parse(localStorage.getItem('data'))
                const delObj = dataLocalStorage.find(({id})=>id === this.id)
                const indexDelObj = dataLocalStorage.indexOf(delObj)
                dataLocalStorage.splice(indexDelObj, 1);
                localStorage.setItem('data', JSON.stringify(dataLocalStorage))
                this.card.remove()
            }
        })
}
function editVisit(){
    // formModal
    console.log(this.doctor);
    switch (this.doctor) {
        case "dentist": createDentistInstance()
            break;
        case "cardiologist": createCardiologistInstance()
            break;
        case "therapist": createTherapistInstance()
            break;
        default: console.log("value not selected");
            break;
    }

    //select_modal.js
//     console.log(this.adjustButton)
//    this.adjustButton.setAttribute('id', `${this.id}`);
//     const btnEdit = this.adjustButton;
//         console.log(btnEdit)
//     const divContainerEdit = document.querySelector(`.container-edit`)
// // const test =
//     new Modal('Edit', 'FormCard', 'Save', 'Close').createElements(divContainerEdit)
// const windEdit = document.getElementById(`ModalEdit`)
//     console.log(windEdit)
//     // windEdit.style.display = `block`
}