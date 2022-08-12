export const HideModal = () =>{
  const modal =  document.querySelector("body")
console.log(modal); 
modal.classList.remove("modal-open")
// modal.style.display = "none"
// modal.style.backdrop = false
}
