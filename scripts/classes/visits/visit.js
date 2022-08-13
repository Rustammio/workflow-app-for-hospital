export default class Visit {
    constructor(id, title, description, doctor, name, urgency){
        this.id = id;
        this.doctor = doctor;
        this.nameClient = name;
        this.title = title;
        this.description = description;
        this.urgency = urgency;

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
        this.deleteButton.setAttribute('data-bs-target', '#deleteModal');


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

        // this.deleteButton.addEventListener('click', this.delete);
        this.showMoreButton.addEventListener('click', this.showMore.bind(this));
        this.hideButton.addEventListener('click', this.hide.bind(this));
        // this.deleteModalBtn = document.querySelector("#deleteModalBtn")
        // this.deleteModalBtn.addEventListener('click', this.delete.bind(this));

        // this.adjustButton.addEventListener('click',      );


    }

    buildingCard(){
        const container = document.querySelector('.card-container')
        container.append(this.cardCol)
        this.cardCol.setAttribute('id',`${this.id}`)
        this.cardCol.append(this.card)
        // this.cardCol.append(this.divButtons)
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
             <h5 class="card-title">${this.title}</h5>
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
        this.cardCol.remove()
        // this.deleteModalBtn = document.querySelector("#deleteModalBtn")
        //  let decidedDelete
        //  deleteModalBtn.addEventListener('click', ()=>{
        //     decidedDelete = true;
        //     console.log(decidedDelete)
        //  })
        //  if(decidedDelete === true){
        //      console.log(this.cardCol)
        //      this.cardCol.remove()
        //  }
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
    }

    adjust(){
        this.adjustButton.addEventListener('click', ()=>{

        })
    }
}
//---------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------------
// class VisitDentist extends Visit {
//     constructor(id, title, description, doctor, nameClient, urgency, dateLastVisit,){
//         super(id, title, description, doctor, nameClient, urgency);
//         this.dateLastVisit = dateLastVisit;
//     }
//     showMore(){
//         super.showMore();
//         this.infoPatient.insertAdjacentHTML('beforeend', `
//             <li class="card-text">${this.dateLastVisit}</li>`)
//     }
//
//
// }



//------------------------------------------------------------------------------------
// class VisitTherapist extends Visit {
//     constructor(id, title, description, doctor, nameClient, urgency,age,){
//         super(id, title, description, doctor, nameClient, urgency,age,);
//         this.age = age;
//     }
//
//     showMore(){
//         super.showMore();
//         this.infoPatient.insertAdjacentHTML('beforeend', `
//             <li class="card-text">${this.age}</li>`)
//     }
//
// }

// const array = [
//     {
//         id:2,
//         title:'title2' ,
//         description:'description2',
//         doctor:'Cardiologist',
//         nameClient:'Katia',
//         urgency:'small talk',
//         pressure:'120/80',
//         bodyMassIndex:'21',
//         cardioIllness:'wah',
//         age:'29',
//
//     },
//     {
//         id:'1',
//         title:'title' ,
//         description:'description',
//         doctor:'Therapist',
//         nameClient:'Vasia',
//         urgency:'very important',
//         age:'29'
//
//
//     },
//     {
//         id:'3',
//         title:'title' ,
//         description:'description',
//         doctor:'Dentist',
//         nameClient:'John',
//         urgency:'very important',
//         dateLastVisit:'29.04.2022'
//
//
//     },
//     {
//         id:'4',
//         title:'title' ,
//         description:'description',
//         doctor:'Therapist',
//         nameClient:'Bill',
//         urgency:'very important',
//         age:'29'
//
//
//     },
//     {
//         id:'5',
//         title:'title' ,
//         description:'cardiologist',
//         doctor:'Therapist',
//         nameClient:'Lusia',
//         urgency:'very important',
//         age:'29'
//
//
//     },
// ]



