import{logIn} from "./scripts/api/log_in.js";
const sign = document.querySelector('.sign')
const signIn = document.querySelector("#signIn");
sign.addEventListener('click', logIn)
dragula([document.querySelector(".card-container")]);