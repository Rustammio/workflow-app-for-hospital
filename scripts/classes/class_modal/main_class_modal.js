export default class Modal{
    
 constructor( title, yes, no){
     this.title = title;
     this.yes = yes;
     this.no = no;
     this.modalElement = document.createElement('div');
 }
 createElements(){
    this.modalElement.classList.add('container-md')
    this.modalElement.insertAdjacentHTML("beforeend",`
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${this.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${this.no}</button>
        <button type="button" class="btn btn-primary">${this.yes}</button>
      </div>
    </div>
  </div>
</div>
    `)

    const container = document.querySelector(".forms")
    console.log(container);
    container.after(this.modalElement)
 }       
        
    
}

