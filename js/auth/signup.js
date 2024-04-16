const nomInput = document.getElementById("nomInput");
const prenomInput = document.getElementById("prenomInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmationPasswordInput = document.getElementById("confirmationPasswordInput"); 
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
    const passwordValid = validPassword(passwordInput);
    const confirmatinoPasswordValid = validConfirmationPasswordInput(passwordInput, confirmationPasswordInput);
    
    if(nomValid && prenomValid && mailValid && passwordValid && confirmatinoPasswordValid) btnValidationForm.disabled = false;
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

const validConfirmationPasswordInput = (inputPassword, inputConfirmationPassword) => {
    if(inputPassword.value == inputConfirmationPassword.value){
        inputConfirmationPassword.classList.add("is-valid");
        inputConfirmationPassword.classList.remove("is-invalid");
        return true;
    }
    else {
        inputConfirmationPassword.classList.add("is-invalid");
        inputConfirmationPassword.classList.remove("is-valid");
        return false;
    }
};

const validPassword = (input) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)) {
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
confirmationPasswordInput.addEventListener("keyup", validateForm);


