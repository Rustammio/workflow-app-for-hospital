import{logIn} from "./api/log_in.js";
import {selectedOption} from './modal/select_modal.js'
import {getDataForm} from "./modal/get_data_form.js"
import filtration from "./filters/filter.js";
import {reset} from "./filters/reset.js";
const sign = document.querySelector('.sign')
const search = document.querySelector(".search");
search.addEventListener('click', filtration)
const resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click',reset)
sign.addEventListener('click', logIn)
dragula([document.querySelector(".card-container")]);
selectedOption()
getDataForm()
window.addEventListener('load',()=>{
    localStorage.clear()
})