const nomInput = document.getElementById("nomInput");
const prenomInput = document.getElementById("prenomInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const validatePasswordInput = document.getElementById("validatePasswordInput"); 

const validateRequired = (input) => {
    if(input.value != "") {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }
    else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
};

const validateForm = () => {
    validateRequired(nomInput);
    validateRequired(prenomInput);
    validateRequired(emailInput);
    validateRequired(passwordInput);
    validateRequired(validatePasswordInput);
};

nomInput.addEventListener("keyup", validateForm);
prenomInput.addEventListener("keyup", validateForm);
emailInput.addEventListener("keyup", validateForm);
passwordInput.addEventListener("keyup", validateForm);
validatePasswordInput.addEventListener("keyup", validateForm);


