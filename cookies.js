function transferData() {
    const cname = document.getElementById("name").value;
    const cpass = document.getElementById("password").value;
    registerUser(cname, cpass);
}

function registerUser(cname, cpass) {
    const d = new Date();
    d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = "Username=" + cname + ";" + expires + ";path=/";
    document.cookie = "Password=" + cpass + ";" + expires + ";path=/";
    
    // Redirect sa index page pagka-login
    window.location.assign("index.html");
}

function getUser() {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf("Username=") === 0) {
            return c.substring("Username=".length);
        }
    }
    return null;
}

function onPageLoad() {
    console.log("onLoad Executed");
    let user = getUser();
    if (user) {
        let welcomeEl = document.getElementById("welcometext");
        if (welcomeEl) {
            welcomeEl.innerHTML = "Welcome " + user + "!";
        }
    } else {
        window.location.assign("login.html");
    }
}

function logoutUser() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
    }
    window.location.assign("login.html");
}