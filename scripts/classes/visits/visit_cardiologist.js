import Visit from "./visit.js"
export default class VisitCardiologist extends Visit {
    constructor(pressure, bodyMassIndex, cardioIllness, age, ...args){
        super(...args);
        this.pressure = pressure;
        this.bodyMassIndex = bodyMassIndex;
        this.cardioIllness = cardioIllness;
        this.age = age;
    }

    buildingCardCardiologist() {
        super.buildingCard();
        this.fullcard.insertAdjacentHTML('beforeend', `
        <li class="card-text">${this.pressure}</li>
        <li class="card-text">${this.bodyMassIndex}</li>
        <li class="card-text">${this.cardioIllness}</li>
        <li class="card-text">${this.age}</li>`)
    }
}
