const confirmTesting = document.querySelector("form[name=confirm-testing]")
const confirmationTest = document.querySelector("#confirmation-test")

const phoneNumber = document.querySelector("input[name=phoneNumber]")
const issueText = document.querySelector("input[name=issueText]")



confirmTesting.addEventListener('submit', (e) => {
  e.preventDefault()

  confirmationTest.textContent = window.sessionStorage.getItem("dates")
})
