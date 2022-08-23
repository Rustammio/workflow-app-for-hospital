import EmptyInput from "../../err/emptyInput.js"
import ChooseSelect from "../../err/chooseSelect.js"
import { createReqestModal } from "../../api/post_form.js"

// const containerForm = document.querySelector('.card-container')

export const getDataForm = () => {
    let inpToRequest = {}
    let selectToRequest = {}
    let objToRequest = {}

    const submitButton = document.querySelector(".submit")

    submitButton.addEventListener("click", () => {
        
        const form = document.querySelector(".create_form")
        const formValidation = document.querySelector(".client-healthy")
        const inputs = form.querySelectorAll('input')
        const selectList = form.querySelectorAll("select")

        try {
            // (( )=> {
            // //     // console.log(form.checkValidity())
            // //     //
            // //     // if(this.modalEditBody.checkValidity()){
            // //     //
            // //     //    throw new EmptyInput
            // //     // }
               
            // })()
// ______________________________________________________________
            // const body = document.querySelector(".modal-edit-body")
    const inputList = [...formValidation.querySelectorAll('input')]
    console.log(inputList)

const arr = inputList.map(el=>
{
    return el.value
}
    )

    const acceptBtn = document.querySelector(".accept_btn")
console.log(arr)
const arrEmp = arr.filter(el => el === "")
console.log(arrEmp)
    if(arrEmp.length === 0){
        inputs.forEach(input => {
            let key = input.ariaLabel
            let value = input.value
            inpToRequest[key] = value
        })
        selectList.forEach(select => {
            let selectValue = select.value
            if (selectValue === "dentist" || selectValue === "cardiologist" || selectValue === "therapist") {
                selectToRequest.doctor = selectValue
            } else if (selectValue === "High" || selectValue === "Normal" || selectValue === "Low") {
                selectToRequest.urgency = selectValue}
            })

            const objToRequest = Object.assign(selectToRequest, inpToRequest) 
            objToRequest.status = "open"
            createReqestModal(objToRequest)

        acceptBtn.setAttribute('data-bs-dismiss', 'modal');
        (()=>{acceptBtn.click()})()
        

    } else {
        console.log('EMPTYYY')
        acceptBtn.removeAttribute('data-bs-dismiss')
        throw new EmptyInput
    }
    formValidation.classList.add('was-validated'),false
    // ____________________________________________
            
            // input.forEach(input => {

                // formValidation.childNodes.forEach(({input}) => {
                // console.log(formValidation);
                // console.log( formValidation.childNodes);
                // console.log({input});
                // // const {input} = input;
                // let key = input.ariaLabel
                // let value = input.value
                // if (value === "") {
                  
            //         acceptBtn.removeAttribute('data-bs-dismiss')
            //         throw new EmptyInput()

            //     } else {
            //         // inpToRequest[key] = value
            //         objToRequest[key] = value
            //         acceptBtn.setAttribute('data-bs-dismiss', 'modal');
            //         (()=>{acceptBtn.click()})()
            //     }
            // })

            // console.log(objToRequest);

            // selectList.forEach(select => {
            //     let selectValue = select.value

            //     if (selectValue === "dentist" || selectValue === "cardiologist" || selectValue === "therapist") {

            //         selectToRequest.doctor = selectValue

            //     } else if (selectValue === "High" || selectValue === "Normal" || selectValue === "Low") {

            //         selectToRequest.urgency = selectValue
            //         acceptBtn.setAttribute('data-bs-dismiss', 'modal');
            //         (()=>{acceptBtn.click()})()
            //     } else {
            //         acceptBtn.removeAttribute('data-bs-dismiss')
            //         // throw new ChooseSelect()
                    

            //     }
            // })

            // const objToRequest = Object.assign(selectToRequest, inpToRequest) 
            
            // objToRequest.status = "open"
            // createReqestModal(objToRequest)

            // containerForm.innerHTML = "";
             
            // form.classList.add('was-validated'),false

        } catch (e) {
            console.log(e)
            // containerForm.innerHTML = "";
            // containerForm.insertAdjacentHTML(
            //     "afterbegin",
            //     `
            // <div class="alert alert-danger" role="alert">
            // ${e.name}<br/> <a href"#" class= "tryAgain"  data-bs-toggle="modal"
            // data-bs-target="#Modal2">All input or select must be valid</a>
            // </div>`
            // );
        }
    })
}