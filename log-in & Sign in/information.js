// Sign In Code
const submitBtn = document.getElementById("submitBtn")
function submitData(event) {
    const firstname = document.getElementById("firstname")
    const lastname = document.getElementById("lastname")
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const oldUserInfo = JSON.parse(window.localStorage.getItem("UserInfo")) || []

    const newUser = {
        firstname: firstname.value,
        lastname: lastname.value,
        username: username.value,
        password: password.value,
        isLoggedin: true
    }
    console.log(oldUserInfo)

    oldUserInfo.push(newUser)
    
    window.localStorage.setItem("UserInfo", JSON.stringify(oldUserInfo))
    window.location.replace("/")
}