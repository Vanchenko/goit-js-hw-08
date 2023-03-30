
import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const usdate = JSON.parse(localStorage.getItem("feedback-form-state"));

formEl.addEventListener("submit", throttle(checkInput, 500));
formEl.addEventListener("input", throttle(checkInput, 500));

if (usdate.email) { formEl.elements[0].value = usdate.email }
else { formEl.elements[0].value = "" };
if (usdate.message) { formEl.elements[1].value = usdate.message }
else { formEl.elements[1].value = "" };

function checkInput(event) {
    event.preventDefault();
    switch (event.target.nodeName) {
        case "INPUT": usdate.email = event.target.value;
            break;
        case "TEXTAREA": usdate.message = event.target.value;
            break;
        case "FORM": console.log(usdate);
            usdate.email = "";
            usdate.message = "";
            formEl.elements[0].value = usdate.email;
            formEl.elements[1].value = usdate.message;
            break;
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(usdate));
};
