import {logIn} from "./api/log_in.js";

const sign = document.querySelector('.sign')
sign.addEventListener('click', logIn)