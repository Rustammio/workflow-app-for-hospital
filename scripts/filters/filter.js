// import createCard from "../render/createCard.js";
import { cardContainer } from "../api/log_in.js";
import createCard from "../util/create_card.js";
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
    const filterd = data.filter((el) => {
        if (
            (el.status.toLowerCase() === statusInp.value.toLowerCase() &&
                el.urgency.toLowerCase() === urgencyInp.value.toLowerCase()) ||
            (statusInp.value === "" &&
                el.urgency.toLowerCase() === urgencyInp.value.toLowerCase()) ||
            (urgencyInp.value === "" &&
                el.status.toLowerCase() === statusInp.value.toLowerCase()) ||
            (statusInp.value === "" && urgencyInp.value === "")
        ) {
            if (textSearch.value === "") {
                return el;
            } else if (textSearch) {
                if (
                    el.name.includes(textSearch.value) ||
                    el.description.includes(textSearch.value)
                ) {
                    return el;
                }
            }
        }
    });
    console.log(filterd);

    cardContainer.innerHTML = "";
    if (filterd.length === 0){
        cardContainer.insertAdjacentHTML("afterbegin", `
        <h5 class="defText">There are no such cards</h5>
        `)
    }
    filterd.forEach((el)=> createCard(el))
}
