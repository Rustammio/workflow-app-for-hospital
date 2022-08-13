import Visit from './visit.js'
export default class VisitDentist extends Visit {
    constructor(id, title, description, doctor, name, urgency, dateLastVisit,){
        super(id, title, description, doctor, name, urgency);
        this.dateLastVisit = dateLastVisit;
    }
    showMore(){
        super.showMore();
        this.infoPatient.insertAdjacentHTML('beforeend', `
            <li class="card-text">${this.dateLastVisit}</li>`)
    }


}