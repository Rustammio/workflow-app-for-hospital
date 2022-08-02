const emailInp = document.querySelector('.emailInp')
const passwordInp = document.querySelector('.passwordInp')
const sign = document.querySelector('.sign')
sign.addEventListener('click', getToken)
export function getToken(){
    fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: emailInp.value, password: passwordInp.value })
    })
        .then(response => response.text())
        .then(token => localStorage.setItem('token', token))
}

