import {basicModalInstance} from "./form_modal.js"
import {createInput} from "../util/create_input.js"
export const createTherapistInstance = () =>{
    basicModalInstance()
    const therapistInstance = document.querySelector(".client-healthy")
    const therapistArray = ["age"]
    createInput(therapistArray, therapistInstance)
  
}