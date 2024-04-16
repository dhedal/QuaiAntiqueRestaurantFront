const nomInput = document.getElementById("nomInput");
const prenomInput = document.getElementById("prenomInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const validatePasswordInput = document.getElementById("validatePasswordInput"); 
const btnValidationForm = document.getElementById("btn-validation-inscription");
btnValidationForm.disabled = true;

const validateRequired = (input) => {
    if(input.value != "") {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
};

const validateForm = () => {
    const nomValid = validateRequired(nomInput);
    const prenomValid = validateRequired(prenomInput);
    const mailValid = validEmail(emailInput);
    validateRequired(passwordInput);
    validateRequired(validatePasswordInput);
    
    if(nomValid && prenomValid && mailValid) btnValidationForm.disabled = false;
    else btnValidationForm.disabled = true;
};

const validEmail = ( input)=> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
};

nomInput.addEventListener("keyup", validateForm);
prenomInput.addEventListener("keyup", validateForm);
emailInput.addEventListener("keyup", validateForm);
passwordInput.addEventListener("keyup", validateForm);
validatePasswordInput.addEventListener("keyup", validateForm);


