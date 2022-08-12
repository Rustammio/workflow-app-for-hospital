// import getDataForm from "../modal/get_data_form.js"
// import {token} from './log_in.js'
// const objectForReqest = getDataForm(e.target)
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
    console.log(response);
    return response})
}



