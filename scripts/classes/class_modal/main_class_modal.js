export default class Modal{
    
 constructor( title, yes, no){
     this.title = title;
     this.yes = yes;
     this.no = no;
     this.modalElement = document.createElement('div');
     this.modalHeaderWrapper = document.createElement('div');
     this.modalTitle = document.createElement('h5')
     this.closeModalButton = document.createElement('button')
     this.contentWrapper = document.createElement('div');
     this.buttonWrapper = document.createElement('div');
     this.modalNoButton = document.createElement('button');
     this.modalYesButton = document.createElement('button');

 }
    createElements(container){
        this.modalElement.classList.add("container-md")
        this.modalElement.classList.add("modal-content")

        this.modalTitle.innerText = `${this.title}`
        this.modalTitle.classList.add("modal-title")
        this.modalHeaderWrapper.append(this.modalTitle)

        this.closeModalButton.classList.add("close-button")
        this.modalHeaderWrapper.append(this.closeModalButton)

        this.modalElement.append(this.modalHeaderWrapper)
        this.modalElement.append(this.contentWrapper)

        this.modalNoButton.classList.add("btn-light")
        this.modalNoButton.innerText = `${this.no}`
        this.modalYesButton.classList.add("btn-light")
        this.modalYesButton.innerText = `${this.yes}`

        this.buttonWrapper.append(this.modalNoButton)
        this.buttonWrapper.append(this.modalYesButton) 
        

        // createElements()
        container.append(this.modalElement)

        }

        // render(container){
           
        // }


        
        
    
}

