import {clearForm} from "../util/clear_form.js"
// import {HideModal} from "../util/remove_modal.js"
const modalToHide = document.querySelector('.modal_form')
export const createReqestModal = (requestObject) =>{
const token = localStorage.getItem("token")
fetch("https://ajax.test-danit.com/api/v2/cards", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({...requestObject})
})
  .then(response => response.json())
  .then(response => {
    // HideModal()
    if(response.status === 200){
        // modalToHide.setAttribute('aria-hidden',`true`)
        
        clearForm()
    }
    return response}).catch(err => {
      console.error(err)
    })
}



