const appointmentForm = document.querySelector("form[name=appointment-form]")
const confirmTesting = document.querySelector("form[name=confirm-testing]")
const confirmationTest = document.querySelector("#confirmation-test")

const phoneNumber = document.querySelector("input[name=phoneNumber]")
const issueText = document.querySelector("input[name=issueText]")



appointmentForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  var apptDataArr = await window.sessionStorage.getItem("dates").split(" ")
  confirmationTest.textContent = apptDataArr[2]

  var appointmentData = {
                      	"message": issueText.value,
                      	"info": phoneNumber.value,
                      	"time": parseInt(apptDataArr[3]),
                      	"month": 0,
                      	"date": parseInt(apptDataArr[2]),
                      	"monthName": apptDataArr[1]
                        }


  confirmationTest.textContent = issueText.value

  fetch("/appointment", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(appointmentData) }).then((res) => {
    res.json().then((data) => {


      confirmationTest.textContent = JSON.stringify(data)
    })
  })


})
