import Visit from "./visit.js"
export default class VisitCardiologist extends Visit {
    constructor(id, title, description, doctor, name, urgency, pressure, bodyMassIndex, cardioIllness, age, ){
        super(id, title, description, doctor, name, urgency);
        this.pressure = pressure;
        this.bodyMassIndex = bodyMassIndex;
        this.cardioIllness = cardioIllness;
        this.age = age;
    }

    showMore(){
        super.showMore();
        this.infoPatient.insertAdjacentHTML('beforeend', `
        <li class="card-text">${this.pressure}</li>
        <li class="card-text">${this.bodyMassIndex}</li>
        <li class="card-text">${this.cardioIllness}</li>
        <li class="card-text">${this.age}</li>`)
    }
}