import { clearForm } from "../functions/util/clear_form.js"
import createCard from "../functions/util/create_card.js"

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
      const dataItem = JSON.parse(localStorage.getItem("data"))
      dataItem.push(response)
      localStorage.setItem("data", JSON.stringify(dataItem))

      createCard(response)
      
      return response
    }).catch(err => {
      console.error(err)
    })
}



