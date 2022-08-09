import Visit from './visit.js'
export default class VisitDentist extends Visit {
    constructor(dataLastVisit, ...args){
        super(...args);
        this.dataLastVisit = dataLastVisit;
    }

    buildingCardDentist() {
        super.buildingCard();
        this.fullcard.insertAdjacentHTML('beforeend', `
        <li class="card-text">${this.dataLastVisit}</li>
        `)
    }
}
