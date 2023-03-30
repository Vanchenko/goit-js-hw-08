
import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const usdate = {
    email: "",
    message: "",
};
const pp = JSON.parse(localStorage.getItem("feedback-form-state"));
console.log(pp)

if (pp) {
    console.log("true")
    usdate.email = pp.email;
    usdate.message = pp.message;
    };

console.log(usdate);

formEl.elements[0].value = usdate.email;
formEl.elements[1].value = usdate.message;

formEl.addEventListener("submit", throttle(checkInput, 500));
formEl.addEventListener("input", throttle(checkInput, 500));

function checkInput(event) {
    event.preventDefault();
    switch (event.target.nodeName) {
        case "INPUT": usdate.email = event.target.value;
            break;
        case "TEXTAREA": usdate.message = event.target.value;
            break;
        case "FORM": console.log(usdate);
            localStorage.removeItem("feedback-form-state");
            formEl.elements[0].value = "";
            formEl.elements[1].value = "";
            return;
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(usdate));
};
