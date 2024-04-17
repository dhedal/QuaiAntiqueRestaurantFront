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
    const nameEQ = name + "=";
    let ca = document.cookie.split(";");

    for(const element of ca){
        let c = element;
        while(c.startsWith(' ')) c = c.substring(1, c.length);
        if( c.startsWith(nameEQ)) return c.substring(nameEQ.length, c.length)
    }
    return null;
}

const eraseCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    window.location.reload();
}


const getRole = () => {
    const role =  getCookie(roleCookieName);
    return role?.includes("=") ? role.split("=")[1] : role;
};

const signout = () => {
    eraseCookie(tokenCookieName);
    eraseCookie(roleCookieName);
}

signoutBtn.addEventListener("click", eraseCookie);

const isConnected = () => {
    return !(getToken() == null || getToken == undefined);
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
