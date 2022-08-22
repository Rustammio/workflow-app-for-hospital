const emailInp = document.querySelector('.emailInp')
const passwordInp = document.querySelector('.passwordInp')
const sign = document.querySelector('.sign')
sign.addEventListener('click', logIn)
import {cardsManage} from "./get_cards.js";
import InvalidEmailOrPassword from "../err/invalidPOrE.js";
import EmptyInput from "../err/emptyInput.js";
import {createdButton} from "../functions/util/create_button.js"

export const cardContainer = document.querySelector('.card-container')
const logP = document.querySelector('.logP');

export function logIn() {
    logP.classList.add('was-validated')
    const inputList = [...logP.querySelectorAll('input')];
    console.log(inputList)

    const arr = inputList.map(el => {
            return el.value
        }
    )
    console.log(arr)
    const arrEmp = arr.filter(el => el === "")
    console.log(arrEmp)
    if (arrEmp.length === 0) {
        sign.setAttribute('data-bs-dismiss', 'modal');
        (() => {
            sign.click()
        })()

    } else {
        console.log('EMPTYYY')
        throw new EmptyInput
    }

    (() => {

    })()


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
            if (!res.ok && res.status === 500) {
                throw new EmptyInput()
            }
            return res.text();
        })
        .then((token) => {
            localStorage.setItem("token", token);
            cardContainer.innerHTML = "";
            cardsManage();
            createdButton();

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

