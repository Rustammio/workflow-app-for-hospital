import EmptyInput from "../err/emptyInput.js"
import ChooseSelect from "../err/chooseSelect.js"
import { createReqestModal } from "../api/post_form.js"
export const getDataForm = () => {
    let arrInput = []
    let arrSelect = []
    const submitButton = document.querySelector(".submit")
    submitButton.addEventListener("click", () => {
        const form = document.querySelector(".create_form")
        const inputList = form.querySelectorAll('input')
        const selectList = form.querySelectorAll("select")
        try{
        inputList.forEach(input => {

            let key = input.ariaLabel
            let value = input.value
            if (value === "") {
                throw new EmptyInput()

            } else {
                let inpToRequest = ({ [key]: value })
                arrInput.push(inpToRequest);
                

            }

        })
        selectList.forEach(select => {
            let selectValue = select.value
            if (selectValue === "dentist" || selectValue === "cardiologist" || selectValue === "therapist") {

                arrSelect.push(({ "doctor": selectValue }))

            } else if (selectValue === "routine" || selectValue === "priority" || selectValue === "urgent") {
               
                arrSelect.push(({ "urgently": selectValue }))
            } else {
                throw new ChooseSelect()
            }

        })
        const arrToRequest = [...arrInput, ...arrSelect]
        const objToRequest = Object.assign({}, arrToRequest)
        console.log(objToRequest);
        createReqestModal(objToRequest)
    }catch(e){
        console.log(e)
    }
    })


}