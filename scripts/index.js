import{logIn} from "./api/log_in.js";
import {selectedOption} from './modal/select_modal.js'
import {getDataForm} from "./modal/get_data_form.js"

const sign = document.querySelector('.sign')
const signIn = document.querySelector("#signIn");

sign.addEventListener('click', logIn)
dragula([document.querySelector(".card-container")]);


selectedOption()
getDataForm()
