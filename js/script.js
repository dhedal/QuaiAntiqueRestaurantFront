const tokenCookieName = "accesstoken";
const roleCookieName = "role";

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
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    window.location.reload();
}


const getRole = () => {
    const role =  getCookie(roleCookieName);
    if(role != null && role.includes("=")) return role.split("=")[1];
};

const signout = () => {
    eraseCookie(tokenCookieName);
    eraseCookie(roleCookieName);
}

signoutBtn.addEventListener("click", eraseCookie);

const isConnected = () => {
    if(getToken() == null || getToken == undefined) return false;
    return true;
};

/**
 * disconnected
 * connected
 *     - admin
 *     - client
 */
const showAndHideElementsForRoles = () => {
    const userConnected = isConnected();
    const role = getRole();
    console.log("connected: ", userConnected, "role: ", role);

    let allElementToEdit = document.querySelectorAll('[data-show]');
    allElementToEdit.forEach((element) => {
        switch(element.dataset.show) {
            case 'disconnected' : 
                if(userConnected) element.classList.add("d-none");
                break;
            case 'connected' : 
                if(!userConnected) element.classList.add("d-none");
                break;
            case 'admin' :
                if(!userConnected || role != "admin") element.classList.add("d-none"); 
                break;
            case 'client' : 
                if(!userConnected || role != "client") element.classList.add("d-none"); 
                break;
        }
    });
};
