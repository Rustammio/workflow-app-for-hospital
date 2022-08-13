import Visit from './visit.js'
export default class VisitTherapist extends Visit {
    constructor(id, title, description, doctor, name, urgency,age,){
        super(id, title, description, doctor, name, urgency,age,);
        this.age = age;
    }

    showMore(){
        super.showMore();
        this.infoPatient.insertAdjacentHTML('beforeend', `
            <li class="card-text">${this.age}</li>`)
    }

}