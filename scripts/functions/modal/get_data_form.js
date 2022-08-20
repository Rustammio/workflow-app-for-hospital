import EmptyInput from "../../err/emptyInput.js"
import ChooseSelect from "../../err/chooseSelect.js"
import { createReqestModal } from "../../api/post_form.js"

const containerForm = document.querySelector('.card-container')

export const getDataForm = () => {
    let inpToRequest = {}
    let selectToRequest = {}

    const submitButton = document.querySelector(".submit")

    submitButton.addEventListener("click", () => {
        
        const form = document.querySelector(".create_form")
        const inputList = form.querySelectorAll('input')
        const selectList = form.querySelectorAll("select")

        try {
            inputList.forEach(input => {

                let key = input.ariaLabel
                let value = input.value
                if (value === "") {

                    throw new EmptyInput()

                } else {
                    inpToRequest[key] = value
                }
            })

            selectList.forEach(select => {
                let selectValue = select.value

                if (selectValue === "dentist" || selectValue === "cardiologist" || selectValue === "therapist") {

                    selectToRequest.doctor = selectValue

                } else if (selectValue === "High" || selectValue === "Normal" || selectValue === "Low") {

                    selectToRequest.urgency = selectValue
                } else {

                    throw new ChooseSelect()

                }
            })

            const objToRequest = Object.assign(selectToRequest, inpToRequest) 
            
            objToRequest.status = "open"
            createReqestModal(objToRequest)

            containerForm.innerHTML = "";
             


        } catch (e) {
            console.log(e)
            containerForm.innerHTML = "";
            containerForm.insertAdjacentHTML(
                "afterbegin",
                `
            <div class="alert alert-danger" role="alert">
            ${e.name}<br/> <a href"#" class= "tryAgain"  data-bs-toggle="modal"
            data-bs-target="#Modal2">All input or select must be valid</a>
            </div>`
            );
        }
    })
}