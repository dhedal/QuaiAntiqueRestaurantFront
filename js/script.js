const tokenCookieName = "accesstoken";
const signoutBtn = document.getElementById("signout-btn");

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
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
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
    console.log(document.cookie);
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    console.log(document);

   
    window.location.reload();
}

const isConnected = () => {
    if(getToken() == null || getToken == undefined) return false;
    return true;
}

const signout = () => {
    eraseCookie(tokenCookieName);
}

signoutBtn.addEventListener("click", eraseCookie);

if(isConnected()) alert("Je suis connecté");
else alert ("Je ne suis pas connecté");