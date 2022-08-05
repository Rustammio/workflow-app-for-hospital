import {logIn} from "./api/log_in.js";
import Modal from "./classes/class_modal/main_class_modal.js";

const sign = document.querySelector('.sign')

sign.addEventListener('click', logIn)


const modalContainer = document.querySelector(".modal-dialog")
const testModal = new Modal("create visit").createElements(modalContainer)
// testModal.render()