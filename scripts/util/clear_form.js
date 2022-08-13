export const clearForm = () => {

    const form = document.querySelector(".create_form")
    const inputList = form.querySelectorAll('input')
    const selectList = form.querySelectorAll("select")

    inputList.forEach(input => {
        input.value = ''
    })
    
    selectList.forEach(select => {
        select.getAttribute("selected")
    })
}