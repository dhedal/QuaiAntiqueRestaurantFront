const tokenCookieName = "accesstoken";
const roleCookieName = "role";
const apiUrl = "https://127.0.0.1:8000/api/";

const signoutBtn = document.getElementById("signout-btn");



/**
 * fonction qui permet d'éviter 
 * les failles XSS injection HTML
 */
const sanitizeHtml = (text) => {
    const tempHtml = document.createElement("div");
    tempHtml.textContent = text;
    return tempHtml.innerHTML;
};

/**
 * 
 */
const getInfosUser = () => {
    const myHeaders = new Headers();
    myHeaders.append("X-AUTH-TOKEN", getToken());
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch(apiUrl + "account/me", requestOptions)
        .then(response => {
            if(response.ok) return response.json();
            else console.log("impossible de récupérer les infos utilisateurs");
        })
        .then(result => {return result;})
        .catch(error => { console.error("erreur lors de la récupération des données utilisateurs", error);});

};

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
