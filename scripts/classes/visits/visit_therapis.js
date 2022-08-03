import Visit from './visit.js'
export default class VisitTherapist extends Visit {
    constructor(age, ...args){
        super(...args);
        this.age = age;
    }

    buildingCardTherapist() {
        super.buildingCard();
        this.fullcard.insertAdjacentHTML('beforeend', `
        <li class="card-text">${this.age}</li>
       `)
    }
}