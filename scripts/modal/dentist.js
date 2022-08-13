import {basicModalInstance} from "./form_modal.js"
import {createInput} from "../util/create_input.js"
export const createDentistInstance = () =>{
    basicModalInstance()
    const dentistInstance = document.querySelector(".client-healthy")
    const dentistArray = ['last visit']

    createInput(dentistArray, dentistInstance)


}