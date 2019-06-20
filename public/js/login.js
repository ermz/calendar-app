// Forms

const loginForm = document.querySelector("form[name=login]")
const signinForm = document.querySelector("form[name=signin]")
const logoutForm = document.querySelector("form[name=logout]")


// Inputs

const loginUser = document.querySelector("input[name=login-username]")
const loginPass = document.querySelector("input[name=login-password]")

const signinUser = document.querySelector("input[name=signin-username]")
const signinPass = document.querySelector("input[name=signin-password]")

const loginStatus = document.querySelector(".login-status")
const loginStatusDiv = document.querySelector(".login-status-div")



loginForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  var loginData = {
                  "name": "customer " + loginUser.value,
                  "email": loginUser.value,
                  "password": loginPass.value
                  }

  fetch("/users", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(loginData) }).then((res) => {
    res.json().then((data) => {

    loginStatus.textContent = 'this was a successful login'

    })
  })
})


signinForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  var signinData = {
                    "email": signinUser.value,
                    "password": signinPass.value
  }

  fetch("/users/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(signinData) }).then((res) => {
    res.json().then((data) => {

      loginStatus.textContent = "yay sigin was successful"

    })
  })
})


logoutForm.addEventListener("submit", (e) => {
  e.preventDefault()

  fetch("/users/logout", { method: "POST", headers: {"Content-Type": "application/json"}}).then((res) => {
    res.json().then((data) => {
      loginStatus.textContent = "this was log out"

    })
  })
})
