import Visit from './visit.js'
export default class VisitTherapist extends Visit {
<<<<<<< HEAD
    constructor(age, ...args){
        super(...args);
        this.age = age;
    }

    buildingCardTherapist() {
        super.buildingCard();
        this.fullcard.insertAdjacentHTML('beforeend', `
        <li class="card-text">${this.age}</li>
       `)
=======
    constructor(id, title, description, doctor, nameClient, urgency,age,){
        super(id, title, description, doctor, nameClient, urgency,age,);
        this.age = age;
    }

    showMore(){
        super.showMore();
        this.infoPatient.insertAdjacentHTML('beforeend', `
            <li class="card-text">${this.age}</li>`)
>>>>>>> 0736e64cc6b606515d0923e305310463d0a10cf9
    }

}