import { clearForm } from "../util/clear_form.js"
import createCard from "../util/create_card.js"

export const createReqestModal = (requestObject) => {
  const token = localStorage.getItem("token")
  fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },

    body: JSON.stringify(requestObject)
  })
    .then(response => {
      if (response.status === 200) {
        return response.json()

      } else {
        throw new Error(response.status)
      }
    })
    .then(response => {

      clearForm()

      localStorage.setItem("data", response)

      createCard(response)
      
      return response
    }).catch(err => {
      console.error(err)
    })
}



