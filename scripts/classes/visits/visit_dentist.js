import Visit from './visit.js'
export default class VisitDentist extends Visit {
<<<<<<< HEAD
    constructor(dataLastVisit, ...args){
        super(...args);
        this.dataLastVisit = dataLastVisit;
    }

    buildingCardDentist() {
        super.buildingCard();
        this.fullcard.insertAdjacentHTML('beforeend', `
        <li class="card-text">${this.dataLastVisit}</li>
        `)
=======
    constructor(id, title, description, doctor, nameClient, urgency, dateLastVisit,){
        super(id, title, description, doctor, nameClient, urgency);
        this.dateLastVisit = dateLastVisit;
    }
    showMore(){
        super.showMore();
        this.infoPatient.insertAdjacentHTML('beforeend', `
            <li class="card-text">${this.dateLastVisit}</li>`)
>>>>>>> 0736e64cc6b606515d0923e305310463d0a10cf9
    }


}