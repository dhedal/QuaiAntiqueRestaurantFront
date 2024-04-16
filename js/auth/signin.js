const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const btnSignin = document.getElementById("btnSignin");


const checkCredentials = () => {
    //Ici, il faudra appeler l'API pour vérifier les crédentials en BDD

    if(emailInput.value == "test@mail.com" && passwordInput.value == "123") {
        // Il faudra récupérer le vrai token
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";

        setToken(token);
        // placer ce token en cookie

        setCookie(roleCookieName, "admin", 7);
        window.location.replace("/");
    }
    else {
        emailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}


btnSignin.addEventListener("click", checkCredentials);