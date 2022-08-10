const emailInp = document.querySelector('.emailInp')
const passwordInp = document.querySelector('.passwordInp')
const sign = document.querySelector('.sign')
sign.addEventListener('click', logIn)
import {cardsManage} from "./get_cards.js";
import InvalidEmailOrPassword from "../err/invalidPOrE.js";
import EmptyInput from "../err/emptyInput.js";
export const cardContainer = document.querySelector('.card-container')
export function logIn() {
    fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: emailInp.value, password: passwordInp.value})
    })
        .then((res) => {
            console.log(res);
            if (!res.ok && res.status === 401) {
                throw new InvalidEmailOrPassword();
            }
            if(!res.ok && res.status === 500) {
                throw new EmptyInput()
            }
            return res.text();
        })
        .then((token) => {
            localStorage.setItem("token", token);
            cardContainer.innerHTML = "";
            cardsManage();
            signIn.innerText = "Create Visit";
            // signIn.setAttribute("data-bs-target", "#createModal");
        })
        .catch((e) => {
            console.log(e);
            cardContainer.innerHTML = "";
            cardContainer.insertAdjacentHTML(
                "afterbegin",
                `
            <div class="alert alert-danger" role="alert">
            ${e.name}<br/> <a href"#" class= "tryAgain"  data-bs-toggle="modal"
            data-bs-target="#exampleModal">Try logging in again</a>
            </div>`
            );
        });

}

