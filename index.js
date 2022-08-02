import{getToken} from "./scripts/api/log_in.js";
const sign = document.querySelector('.sign')
sign.addEventListener('click', getToken)