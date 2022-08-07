export const createdButton = () => {
    const buttonLogin = document.getElementById("button_login");
    buttonLogin.remove();
    const buttonWrapper = document.createElement("div")
    buttonWrapper.className = "create_wrapper"
    const buttonNav = document.getElementById("navbar");
    buttonWrapper.insertAdjacentHTML("beforeend", `
    <button
    type="button"
    class="btn btn-outline-light back"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    id="button_create"   
>
Create card
</button>
    `);

    buttonNav.append( buttonWrapper)
    // console.log(buttonCreateCard);
    // buttonCreateCard.addEventListener("click", ()=>{
    //     const testModal = new CreateModal("https://ajax.test-danit.com/api/v2/cards", "create visit", "Submit", "Cancel").createElements(modalContainer)

    // })
    const btn = document.querySelector(".create_wrapper")
    // console.log(btn);
    btn.addEventListener("click",(e) =>{
       alert("Create")
       })
}
