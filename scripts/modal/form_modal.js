
import { createInput } from "../util/create_input.js"

export const
    basicModalInstance = () => {
     
     const arrayHealthyOptions = ["purpose visit", "description problem", "name"]
     const clientHealthy = document.createElement("div")
     clientHealthy.classList.add("client-healthy")

     createInput(arrayHealthyOptions, clientHealthy)

     clientHealthy.insertAdjacentHTML("beforeend", `
      <select class="form-select form-select select_form" aria-label=".form-select-sm urgen">
      <option selected>urgency</option>
      <option value="High">High</option>
      <option value="Normal">Normal</option>
      <option value="Low">Low</option>
      </select> 
      `)

     const formBody = document.querySelector(".create_form")
     formBody.append(clientHealthy)
}
export const
    basicModalEdit = () => {

         const arrayHealthyOptions = ["purpose visit", "description problem", "name"]
         const clientHealthy = document.createElement("div")
         clientHealthy.classList.add("client-healthy")

         createInput(arrayHealthyOptions, clientHealthy)

         clientHealthy.insertAdjacentHTML("beforeend", `
      <select class="form-select form-select select_form" aria-label=".form-select-sm urgen">
      <option selected>urgency</option>
      <option value="High">High</option>
      <option value="Normal">Normal</option>
      <option value="Low">Low</option>
      </select> 
      `)

         const formBody = document.querySelector(".create_form")
         formBody.append(clientHealthy)
    }
