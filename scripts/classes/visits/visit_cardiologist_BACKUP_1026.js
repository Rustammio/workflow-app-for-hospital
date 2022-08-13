import Visit from "./visit.js"
export default class VisitCardiologist extends Visit {
<<<<<<< HEAD
    constructor(id, title, description, doctor, name, urgency, pressure, bodyMassIndex, cardioIllness, age, ){
        super(id, title, description, doctor, name, urgency);
=======
    constructor(id, purpose, description, doctor, name, urgency, pressure, mass, cardio, age, ){
        super(id, purpose, description, doctor, name, urgency);
>>>>>>> d3f26809eb146c693f4ecc4712694bab5f0fa446
        this.pressure = pressure;
        this.mass = mass;
        this.cardio = cardio;
        this.age = age;
    }

    showMore(){
        super.showMore();
        this.infoPatient.insertAdjacentHTML('beforeend', `
        <li class="card-text">${this.pressure}</li>
        <li class="card-text">${this.mass}</li>
        <li class="card-text">${this.cardio}</li>
        <li class="card-text">${this.age}</li>`)
    }
}