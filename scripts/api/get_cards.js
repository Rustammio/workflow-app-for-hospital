export function cardsManage() {
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            localStorage.removeItem("data");
            // localStorage.setItem("data", JSON.stringify(arrayOfCards));
            localStorage.setItem("data", JSON.stringify(data));
        });
}



 // test cardCreator class
// class createCard {
//     constructor(age, bp, description, doctor, title, weight, id) {
//         this.container = document.querySelector(".card-container");
//         this.age = age;
//         this.bp = bp;
//         this.description = description;
//         this.doctor = doctor;
//         this.title = title;
//         this.weight = weight;
//         this.id = id;
//     }
//     delete() {
//         fetch(`https://ajax.test-danit.com/api/v2/cards/${this.id}`, {
//             method: "DELETE",
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//         });
//     }
//     render() {
//         const card = `<div class="col">
//         <div class="card">
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">${this.title}</p>
//                 <p class='card-text'>${this.doctor}</p>
//                 <p class='card-text'>${this.description}</p>
//                 <p class='card-text'>${this.age}</p>
//                 <p class='card-text'>${this.weight}</p>
//                 <button
//                     type="button"
//                     class="btn btn-outline-light"
//                 >
//                     Info
//                 </button>
//             </div>
//         </div>
//     </div>`;
//         this.container.insertAdjacentHTML("afterbegin", card);
//     }
// }