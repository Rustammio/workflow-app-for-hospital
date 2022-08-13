import {basicModalInstance} from "./form_modal.js"
import {createInput} from "../util/create_input.js"
export const createCardiologistInstance = () =>{

  basicModalInstance()
  const cardioInstance = document.querySelector(".client-healthy")
  const cardioArray = ['pressure', 'mass index', 'cardio diseases', 'age']

  createInput(cardioArray, cardioInstance)
  
}

