import EmptyInput from "../err/emptyInput.js"
import {createReqestModal} from "../api/post_form.js"
export const getDataForm = ()=>{
    let arrInput = []
const submitButton = document.querySelector(".submit")
submitButton.addEventListener("click", () =>{
    const form = document.querySelector(".create_form")
    const arr = form.querySelectorAll('input')
    const arr2 = form.querySelectorAll("select")
    
    const arrValue = arr.forEach(input =>{        
         
           let key = input.ariaLabel
           let value = input.value
           if(value === "" ){
            console.warn("Invalid value");
            
        }else{
           let objToRequestion =  ({[key]: value})
           arrInput.push(objToRequestion);
            input.value = ''
            
            console.log(arrInput);
        }
        createReqestModal(arrInput)
    })
})
// return arrInput

}