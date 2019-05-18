
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

const firstSlot = document.querySelector("#ten-0")
const secondSlot = document.querySelector("#eleven-0")
const thirdSlot = document.querySelector("#twelve-0")
const fourthSlot = document.querySelector("#one-0")
const fifthSlot = document.querySelector("#two-0")
const sixthSlot = document.querySelector("#three-0")
const seventhSlot = document.querySelector("#four-0")

const firstSlotTwo = document.querySelector("#ten-1")
const secondSlotTwo = document.querySelector("#eleven-1")
const thirdSlotTwo = document.querySelector("#twelve-1")
const fourthSlotTwo = document.querySelector("#one-1")
const fifthSlotTwo = document.querySelector("#two-1")
const sixthSlotTwo = document.querySelector("#three-1")
const seventhSlotTwo = document.querySelector("#four-1")

const firstSlotThree = document.querySelector("#ten-2")
const secondSlotThree = document.querySelector("#eleven-2")
const thirdSlotThree = document.querySelector("#twelve-2")
const fourthSlotThree = document.querySelector("#one-2")
const fifthSlotThree = document.querySelector("#two-2")
const sixthSlotThree = document.querySelector("#three-2")
const seventhSlotThree = document.querySelector("#four-2")

const firstSlotFour = document.querySelector("#ten-3")
const secondSlotFour = document.querySelector("#eleven-3")
const thirdSlotFour = document.querySelector("#twelve-3")
const fourthSlotFour = document.querySelector("#one-3")
const fifthSlotFour = document.querySelector("#two-3")
const sixthSlotFour = document.querySelector("#three-3")
const seventhSlotFour = document.querySelector("#four-3")

const firstSlotFive = document.querySelector("#ten-4")
const secondSlotFive = document.querySelector("#eleven-4")
const thirdSlotFive = document.querySelector("#twelve-4")
const fourthSlotFive = document.querySelector("#one-4")
const fifthSlotFive = document.querySelector("#two-4")
const sixthSlotFive = document.querySelector("#three-4")
const seventhSlotFive = document.querySelector("#four-4")

const firstSlotSix = document.querySelector("#ten-5")
const secondSlotSix = document.querySelector("#eleven-5")
const thirdSlotSix = document.querySelector("#twelve-5")
const fourthSlotSix = document.querySelector("#one-5")
const fifthSlotSix = document.querySelector("#two-5")
const sixthSlotSix = document.querySelector("#three-5")
const seventhSlotSix = document.querySelector("#four-5")

const firstSlotSeven = document.querySelector("#ten-6")
const secondSlotSeven = document.querySelector("#eleven-6")
const thirdSlotSeven = document.querySelector("#twelve-6")
const fourthSlotSeven = document.querySelector("#one-6")
const fifthSlotSeven = document.querySelector("#two-6")
const sixthSlotSeven = document.querySelector("#three-6")
const seventhSlotSeven = document.querySelector("#four-6")

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

  var indiDateArray = showIndividualDateTwo.value.split(" ")
  testing.textContent = indiDateArray

  var timeSlotArr = [10, 11, 12, 1, 2, 3, 4]
  var timeSlotNameArr = [firstSlotTwo, secondSlotTwo, thirdSlotTwo, fourthSlotTwo, fifthSlotTwo, sixthSlotTwo, seventhSlotTwo]

  var timeSlotObj = { first: firstSlot }

  for (var i = 0; i < timeSlotArr.length; i++) {
    var currentTimeSlot = timeSlotArr[i]
    const currentTimeSlotNameTwo = timeSlotNameArr[i]

    fetch("/appointment/5" + "&" + indiDateArray[2] + "&" + currentTimeSlot).then((res) => {
      res.json().then(async (data) => {

        // As long as fetch works, then the code below will also work
        // Just need to figure out how to pick and choose const names
        // firstSlot.classList.add("unavailable")
        // testing.textContent = JSON.stringify(timeSlotObj.name)

        await currentTimeSlotNameTwo.classList.add("unavailable")

        // testing.textContent = JSON.stringify(data)

      })
    })
  }


})

showAvailableThree.addEventListener('submit', (e) => {
  e.preventDefault()

  var indiDateArray = showIndividualDateThree.value.split(" ")
  testing.textContent = indiDateArray

  var timeSlotArr = [10, 11, 12, 1, 2, 3, 4]
  var timeSlotNameArr = [firstSlotThree, secondSlotThree, thirdSlotThree, fourthSlotThree, fifthSlotThree, sixthSlotThree, seventhSlotThree]

  var timeSlotObj = { first: firstSlot }

  for (var i = 0; i < timeSlotArr.length; i++) {
    var currentTimeSlot = timeSlotArr[i]
    const currentTimeSlotNameThree = timeSlotNameArr[i]

    fetch("/appointment/5" + "&" + indiDateArray[2] + "&" + currentTimeSlot).then((res) => {
      res.json().then(async (data) => {

        // As long as fetch works, then the code below will also work
        // Just need to figure out how to pick and choose const names
        // firstSlot.classList.add("unavailable")
        // testing.textContent = JSON.stringify(timeSlotObj.name)

        await currentTimeSlotNameThree.classList.add("unavailable")

        // testing.textContent = JSON.stringify(data)

      })
    })
  }

})

showAvailableFour.addEventListener('submit', (e) => {
  e.preventDefault()

  var indiDateArray = showIndividualDateFour.value.split(" ")
  testing.textContent = indiDateArray

  var timeSlotArr = [10, 11, 12, 1, 2, 3, 4]
  var timeSlotNameArr = [firstSlotFour, secondSlotFour, thirdSlotFour, fourthSlotFour, fifthSlotFour, sixthSlotFour, seventhSlotFour]

  var timeSlotObj = { first: firstSlot }

  for (var i = 0; i < timeSlotArr.length; i++) {
    var currentTimeSlot = timeSlotArr[i]
    const currentTimeSlotNameFour = timeSlotNameArr[i]

    fetch("/appointment/5" + "&" + indiDateArray[2] + "&" + currentTimeSlot).then((res) => {
      res.json().then(async (data) => {

        // As long as fetch works, then the code below will also work
        // Just need to figure out how to pick and choose const names
        // firstSlot.classList.add("unavailable")
        // testing.textContent = JSON.stringify(timeSlotObj.name)

        await currentTimeSlotNameFour.classList.add("unavailable")

        // testing.textContent = JSON.stringify(data)

      })
    })
  }

})

showAvailableFive.addEventListener('submit', (e) => {
  e.preventDefault()

  var indiDateArray = showIndividualDateFive.value.split(" ")

  testing.textContent = indiDateArray

  var timeSlotArr = [10, 11, 12, 1, 2, 3, 4]
  var timeSlotNameArr = [firstSlotFive, secondSlotFive, thirdSlotFive, fourthSlotFive, fifthSlotFive, sixthSlotFive, seventhSlotFive]

  var timeSlotObj = { first: firstSlot }

  for (var i = 0; i < timeSlotArr.length; i++) {
    var currentTimeSlot = timeSlotArr[i]
    const currentTimeSlotNameFive = timeSlotNameArr[i]

    fetch("/appointment/5" + "&" + indiDateArray[2] + "&" + currentTimeSlot).then((res) => {
      res.json().then(async (data) => {

        // As long as fetch works, then the code below will also work
        // Just need to figure out how to pick and choose const names
        // firstSlot.classList.add("unavailable")
        // testing.textContent = JSON.stringify(timeSlotObj.name)

        await currentTimeSlotNameFive.classList.add("unavailable")

        // testing.textContent = JSON.stringify(data)

      })
    })
  }

})

showAvailableSix.addEventListener('submit', (e) => {
  e.preventDefault()

  var indiDateArray = showIndividualDateSix.value.split(" ")
  testing.textContent = indiDateArray

  var timeSlotArr = [10, 11, 12, 1, 2, 3, 4]
  var timeSlotNameArr = [firstSlotSix, secondSlotSix, thirdSlotSix, fourthSlotSix, fifthSlotSix, sixthSlotSix, seventhSlotSix]

  var timeSlotObj = { first: firstSlot }

  for (var i = 0; i < timeSlotArr.length; i++) {
    var currentTimeSlot = timeSlotArr[i]
    const currentTimeSlotNameSix = timeSlotNameArr[i]

    fetch("/appointment/5" + "&" + indiDateArray[2] + "&" + currentTimeSlot).then((res) => {
      res.json().then(async (data) => {

        // As long as fetch works, then the code below will also work
        // Just need to figure out how to pick and choose const names
        // firstSlot.classList.add("unavailable")
        // testing.textContent = JSON.stringify(timeSlotObj.name)

        await currentTimeSlotNameSix.classList.add("unavailable")

        // testing.textContent = JSON.stringify(data)

      })
    })
  }

})

showAvailableSeven.addEventListener('submit', (e) => {
  e.preventDefault()

  var indiDateArray = showIndividualDateSeven.value.split(" ")
  testing.textContent = indiDateArray

  var timeSlotArr = [10, 11, 12, 1, 2, 3, 4]
  var timeSlotNameArr = [firstSlotSeven, secondSlotSeven, thirdSlotSeven, fourthSlotSeven, fifthSlotSeven, sixthSlotSeven, seventhSlotSeven]

  var timeSlotObj = { first: firstSlot }

  for (var i = 0; i < timeSlotArr.length; i++) {
    var currentTimeSlot = timeSlotArr[i]
    const currentTimeSlotNameSeven = timeSlotNameArr[i]

    fetch("/appointment/5" + "&" + indiDateArray[2] + "&" + currentTimeSlot).then((res) => {
      res.json().then(async (data) => {

        // As long as fetch works, then the code below will also work
        // Just need to figure out how to pick and choose const names
        // firstSlot.classList.add("unavailable")
        // testing.textContent = JSON.stringify(timeSlotObj.name)

        await currentTimeSlotNameSeven.classList.add("unavailable")

        // testing.textContent = JSON.stringify(data)

      })
    })
  }
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
