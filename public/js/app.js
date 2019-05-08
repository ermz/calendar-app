
const showCalendar = document.querySelector("form[name=show-calendar]")
const calendar = document.querySelector("#calendar")

showCalendar.addEventListener('submit', (e) => {
    e.preventDefault()
    calendar.textContent = 'bye calendar'

    fetch("/appointments").then((res) => {
      res.json().then((data) => {
        //Use this to iterate over all appointment data and compare to spaces open
        //if it matches then use classlist to change how it works
        //Problem: how to retrieve all this information from html
        calendar.textContent = JSON.stringify(data[0])

      })
    })
})
