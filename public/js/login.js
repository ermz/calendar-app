// Forms

const loginForm = document.querySelector("form[name=login]")
const signinForm = document.querySelector("form[name=signin]")
const logoutForm = document.querySelector("form[name=logout]")


// Inputs

const loginUser = document.querySelector("form[name=login-username]")
const loginPass = document.querySelector("form[name=login-password]")

const signinUser = document.querySelector("form[name=signin-username]")
const signinPass = document.querySelector("form[name=signin-password]")



loginForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  var loginData = {
                  "email": loginUser.value,
                  "password": loginPass.value
                  }

  fetch("/users/login", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(loginData) }).then((res) => {
    res.json().then((data) => {


    })
  })
})


signinForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  var siginData = {
                    "name": signinUser.value,
                    "email": signinUser.value,
                    "password": signinPass.value
                  }


  fetch("/users", { method: "POST", headers: {"Content-Type": "application/json" }, body: JSON.stringify(signinData) }).then((res) => {
    res.json().then((data) => {


    })
  })
})



logoutForm.addEventListener("submit", (e) => {
  e.preventDefault()

  fetch("/users/logout", { method: "POST", headers: {"Content-Type": "application/json"}}).then((res) => {
    res.json().then((data) => {

      
    })
  })
})
