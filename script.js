const firstNameError = document.querySelector(".first-name-error");
const lastNameError = document.querySelector(".last-name-error");
const emailError = document.querySelector(".email-error");
const queryError = document.querySelector(".query-error");
const messageError = document.querySelector(".message-error");
const checkboxError = document.querySelector(".checkbox-error");
const success = document.querySelector(".success");

let firstNameInput = document.getElementById("first-name");
let lastNameInput = document.getElementById("last-name");
let emailInput = document.getElementById("email");
let enquiryInput = document.getElementById("general-enquiry");
let supportInput = document.getElementById("support-request");
let messageInput = document.getElementById("message");
let checkboxInput = document.getElementById("checkbox");

let submitBtn = document.getElementById("submit");

let isValid = true;

submitBtn.addEventListener("click", (event) => {   
    event.preventDefault()

    if (firstNameInput.value === "") {
        firstNameError.innerText = "This Field is required";
        isValid = false;
        firstNameInput.classList.add("error-border");
      } else {
        firstNameInput.classList.remove("error-border");
      }
      
       if (lastNameInput.value === "") {
        lastNameError.innerText = "This Field is required";
        isValid = false;
        lastNameInput.classList.add("error-border");
      } else {
        lastNameInput.classList.remove("error-border");
      }

    if (emailInput.value === "") {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
        emailInput.classList.add("error-border")
    } else {
        emailInput.classList.remove("error-border")
    }

    if (!enquiryInput.checked && !supportInput.checked) {
        queryError.textContent = "Please select a query type";
        isValid = false;
        enquiryInput.classList.add("error-border")
    } else {
        enquiryInput.classList.remove("error-border")
    }

    if (messageInput.value === "") {
        messageError.textContent = "This field is required";
        isValid = false;
        messageInput.classList.add("error-border")
    } else {
        messageInput.classList.remove("error-border")
    }

    if (!checkboxInput.checked) {
        checkboxError.textContent = "To submit this form, please consent to being contacted";
        isValid = false;
    }


    if(isValid) {
        console.log('form successful')
        success.style.visibility = 'visible';
        setTimeout(function() {
            success.style.visibility = 'hidden';
        }, 3000)

        firstNameInput.value = "";
        lastNameInput.value = "";
        emailInput.value = "";
        enquiryInput.checked = false;
        supportInput.checked = false;
        messageInput.value = "";
        checkboxInput.checked = false;
    }
})


let inputField = document.getElementById();
console.log(inputField);