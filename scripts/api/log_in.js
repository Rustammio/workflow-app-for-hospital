// const emailInp = document.querySelector('.emailInp')
// const passwordInp = document.querySelector('.passwordInp')
// const sign = document.querySelector('.sign')
// sign.addEventListener('click', logIn)
import {cardsManage} from "./get_cards.js";
import {createdButton} from "../util/create_button.js"

export function logIn(emailInp, passwordInp ) {
    fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: emailInp.value, password: passwordInp.value})
    })
        .then(response => response.text())
        .then(token => {
            localStorage.setItem('token', token)            
            createdButton()
            cardsManage()
        })
}

