// import createCard from "../render/createCard.js";
import { cardContainer } from "../api/log_in.js";
const urgencyInp = document.querySelector(".urgency");
// console.log(urgencyInp);
// urgencyInp.addEventListener("change", () => {
//     console.log(urgencyInp.value);
// });
const statusInp = document.querySelector(".status");
// statusInp.addEventListener("change", () => {
//     console.log(statusInp.value);
// });
const textSearch = document.querySelector(".textSearch");

export const doctorType = document.querySelector(".doctorType");
export default function filtration() {
    const data = JSON.parse(localStorage.getItem("data"));
    // console.log("filtraton output :", data);
    // console.log(statusInp.value);
    // console.log(urgencyInp.value);
    // console.log(textSearch.value);
    const fiterd = data.filter((el) => {
        if (
            (el.status.toLowerCase() == statusInp.value.toLowerCase() &&
                el.urgency.toLowerCase() == urgencyInp.value.toLowerCase()) ||
            (statusInp.value == "" &&
                el.urgency.toLowerCase() == urgencyInp.value.toLowerCase()) ||
            (urgencyInp.value == "" &&
                el.status.toLowerCase() == statusInp.value.toLowerCase()) ||
            (statusInp.value == "" && urgencyInp.value == "")
        ) {
            if (textSearch.value === "") {
                return el;
            } else if (textSearch) {
                if (
                    el.title.includes(textSearch.value) ||
                    el.body.includes(textSearch.value)
                ) {
                    return el;
                }
            }
        }
    });
    console.log(fiterd);

    cardContainer.innerHTML = "";
    if (fiterd.length === 0){
        cardContainer.insertAdjacentHTML("afterbegin", `
        <h5 class="defText">There are no such cards</h5>
        `)
    }
    // fiterd.forEach(({ status, body, doctor, title, urgency, id }) => {
    //     return new createCard(
    //         status,
    //         body,
    //         doctor,
    //         title,
    //         urgency,
    //         id
    //     ).render();
        // console.log(status, bp, body, doctor, title, weight);
    // });
}
