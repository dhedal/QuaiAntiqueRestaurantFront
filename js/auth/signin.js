const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const btnSignin = document.getElementById("btnSignin");
btnSignin.disabled = false;

const tokenCookieName = "accesstoken";

const setToken = (token) => {
    setCookie(tokenCookieName, token, 7);
};

const getToken = () => {
    return getCookie(tokenCookieName);
};

const setCookie = (name, value, days) => {
    let expires = "";
    if(days){
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

const getCookie = (name) => {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");

    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        while(c.charAt(0) == ' ') c = c.substring(1, c.length);
        if( c.indexOf(nameEQ) == 0) return c.substring(nameEQ, c.length)
    }
    return null;
}

const eraseCookie = (name) => {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

const checkCredentials = () => {
    //Ici, il faudra appeler l'API pour vérifier les crédentials en BDD

    if(emailInput.value == "test@mail.com" && passwordInput.value == "123") {
        // Il faudra récupérer le vrai token
        //const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";

        // setToken(token);
        // placer ce token en cookie

        // setCookie(tokenCookieName, "admin", 7);
        window.location.replace("/");
    }
    else {
        emailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}

const isConnected = () => {
    if(getToken() == null || getToken == undefined) return false;
    return true;
}

btnSignin.addEventListener("click", checkCredentials);