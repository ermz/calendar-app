
const showCalendar = document.querySelector("form[name=show-calendar]")

const showAvailableOne = document.querySelector("form[name=show-available-dates-0]")
const showAvailableTwo = document.querySelector("form[name=show-available-dates-1]")
const showAvailableThree = document.querySelector("form[name=show-available-dates-2]")
const showAvailableFour = document.querySelector("form[name=show-available-dates-3]")
const showAvailableFive = document.querySelector("form[name=show-available-dates-4]")
const showAvailableSix = document.querySelector("form[name=show-available-dates-5]")
const showAvailableSeven = document.querySelector("form[name=show-available-dates-6]")

const showIndividualDateOne = document.querySelector("input[name=show-individual-date-0]")
const showIndividualDateTwo = document.querySelector("input[name=show-individual-date-1]")
const showIndividualDateThree = document.querySelector("input[name=show-individual-date-2]")
const showIndividualDateFour = document.querySelector("input[name=show-individual-date-3]")
const showIndividualDateFive = document.querySelector("input[name=show-individual-date-4]")
const showIndividualDateSix = document.querySelector("input[name=show-individual-date-5]")
const showIndividualDateSeven = document.querySelector("input[name=show-individual-date-6]")

const firstSlot = document.querySelector("#ten")
const secondSlot = document.querySelector("#eleven")
const thirdSlot = document.querySelector("#twelve")
const fourthSlot = document.querySelector("#one")
const fifthSlot = document.querySelector("#two")
const sixthSlot = document.querySelector("#three")
const seventhSlot = document.querySelector("#four")


const calendar = document.querySelector("#calendar")
var testing = document.querySelector("#testing-p")

showAvailableOne.addEventListener('submit', (e) => {
  e.preventDefault()

  var indiDateArray = showIndividualDateOne.value.split(" ")
  testing.textContent = indiDateArray

  var timeSlotArr = [10, 11, 12, 1, 2, 3, 4]
  var timeSlotNameArr = [firstSlot, secondSlot, thirdSlot, fourthSlot, fifthSlot, sixthSlot, seventhSlot]

  var timeSlotObj = { first: firstSlot }

  for (var i = 0; i < timeSlotArr.length; i++) {
    var currentTimeSlot = timeSlotArr[i]
    const currentTimeSlotName = timeSlotNameArr[i]

    fetch("/appointment/5" + "&" + indiDateArray[2] + "&" + currentTimeSlot).then((res) => {
      res.json().then(async (data) => {

        // As long as fetch works, then the code below will also work
        // Just need to figure out how to pick and choose const names
        // firstSlot.classList.add("unavailable")
        // testing.textContent = JSON.stringify(timeSlotObj.name)

        await currentTimeSlotName.classList.add("unavailable")

        // testing.textContent = JSON.stringify(data)

      })
    })
  }

})

showAvailableTwo.addEventListener('submit', (e) => {
  e.preventDefault()

  var indiDateArray = showIndividualDateTwo.value
  testing.textContent = indiDateArray


})

showAvailableThree.addEventListener('submit', (e) => {
  e.preventDefault()

  var indiDateArray = showIndividualDateThree.value
  testing.textContent = indiDateArray
})

showAvailableFour.addEventListener('submit', (e) => {
  e.preventDefault()

  var indiDateArray = showIndividualDateFour.value
  testing.textContent = indiDateArray
})

showAvailableFive.addEventListener('submit', (e) => {
  e.preventDefault()

  var indiDateArray = showIndividualDateFive.value
  testing.textContent = indiDateArray
})

showAvailableSix.addEventListener('submit', (e) => {
  e.preventDefault()

  var indiDateArray = showIndividualDateSix.value
  testing.textContent = indiDateArray
})

showAvailableSeven.addEventListener('submit', (e) => {
  e.preventDefault()

  var indiDateArray = showIndividualDateSeven.value
  testing.textContent = indiDateArray
})








// Above working on individual days available

showCalendar.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch("/appointments").then((res) => {
      res.json().then((data) => {
        //Use this to iterate over all appointment data and compare to spaces open
        //if it matches then use classlist to change how it works
        //Problem: how to retrieve all this information from html

      })
    })
})
