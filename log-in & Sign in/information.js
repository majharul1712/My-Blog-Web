// Sign in Data
const submitBtn = document.getElementById("submitbtn");
const loginBtn = document.getElementById("loginBtn")
const loginForm = document.getElementById("loginForm")

function submitData(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstname"); 
    const lastName = document.getElementById("lastname");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    
    const oldUserInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

    const newUser = {
        firstName: firstName.value, 
        lastName: lastName.value,
        username: username.value,
        password: password.value,
        isLoggedIn: true        
    };

    oldUserInfo.push(newUser);

    
    window.localStorage.setItem("userInfo", JSON.stringify(oldUserInfo));

    
    console.log("New user info:", newUser);
    console.log("Updated localStorage data:", JSON.parse(localStorage.getItem("userInfo")));

    
    firstName.value = "";
    lastName.value = "";
    username.value = "";
    password.value = "";

    window.location.replace("../index.html");
}


submitBtn.addEventListener("click", submitData);




function loginData(event) {
    event.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    
    const userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

    const user = userInfo.find(
        (u) =>
            u.username.toLowerCase() === username.value.toLowerCase() &&
            u.password === password.value
    );

    if (user) {
        user.isLoggedIn = true;
        localStorage.setItem("loginInfo", JSON.stringify(user));
        window.location.replace("../index.html");
    } else {
        alert("Invalid username or password");
    }
}



