export default class Visit {
    constructor(id, title, description, doctor, nameClient, urgency){
        this.id = id;
        this.doctor = doctor;
        this.nameClient = nameClient;
        this.title = title;
        this.description = description;
        this.urgency = urgency;

        this.card = document.createElement('div');
        this.card.setAttribute('class', 'col')
        this.fullcard = document.createElement('ul');
        this.deleteButton = document.createElement('div');
        this.showMoreButton = document.createElement('button');
        this.adjustButton = document.createElement('button');

        this.deleteButton.addEventListener('click', this.delete);
        this.showMoreButton.addEventListener('click', this.showMore);
        // this.adjustButton.addEventListener('click',      );


    }

    buildingCard(){
        const container = document.querySelector('.row .row-cols-1 .row-cols-md-3 .g-4')
        this.card.setAttribute('id',`${this.id}`)
        this.card.prepend(this.deleteButton)
        this.card.insertAdjacentHTML(`beforeend`, `
        <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${this.nameClient}</h5>
                        <h5 class="card-title">${this.doctor}</h5>                    
                    </div>
                </div>`)
        this.card.append(this.fullcard)
        this.card.append(this.adjustButton)
        this.card.append(this.showMoreButton)
    }

    showMore(){
        this.fullcard.insertAdjacentHTML('beforeend', `
        <li class="card-text">${this.title}</li>
        <li class="card-text">${this.description}</li>
        <li class="card-text">${this.urgency}</li>`)
    }

    delete(){
        const token = localStorage.getItem('token')
        fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => response.status)
            .then(data => {
                if('200'){
                    this.card.remove()
                }
            })


    }

    adjust(){
        this.adjustButton.addEventListener('click', ()=>{

        })
    }

}







