import{logIn} from "./api/log_in.js";
import filtration from "./filters/filter.js";
import {reset} from "./filters/reset.js";
import {selectedOption} from './functions/modal/select_modal.js'
import {getDataForm} from "./functions/modal/get_data_form.js"

const sign = document.querySelector('.sign')
const search = document.querySelector(".search");
search.addEventListener('click', filtration)
const resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click',reset)
sign.addEventListener('click', logIn)
dragula([document.querySelector(".card-container")]);
selectedOption()
getDataForm()
// const idCard = document.getElementById('48019')
// console.log(idCard);
window.addEventListener('load',()=>{
    localStorage.clear()
})