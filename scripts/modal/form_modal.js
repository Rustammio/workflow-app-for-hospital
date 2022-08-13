
import { createInput } from "../util/create_input.js"

export const basicModalInstance = () => {
     
     const arrayHealthyOptions = ["purpose visit", "description problem", "name"]
     const clientHealthy = document.createElement("div")
     clientHealthy.classList.add("client-healthy")

     createInput(arrayHealthyOptions, clientHealthy)

     clientHealthy.insertAdjacentHTML("beforeend", `
      <select class="form-select form-select select_form" aria-label=".form-select-sm urgen">
      <option selected>urgency</option>
      <option value="routine">routine</option>
      <option value="priority">priority</option>
      <option value="urgent">urgent</option>
      </select> 
      `)

     const formBody = document.querySelector(".create_form")
     formBody.append(clientHealthy)
}
