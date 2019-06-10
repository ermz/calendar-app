const showScheduledAppts = document.querySelector("form[name=apptList]")
const allAppts = document.querySelector(".allAppts")


showScheduledAppts.addEventListener('submit', async (e) => {
  e.preventDefault()

  allAppts.innerHTML = "<p>Loading...<p>"

  fetch("/appointments").then((res) => {
    res.json().then((data) => {

      var allDates = data

      var apptsString = ``

      for (var i = 0; i < allDates.length; i++) {
        var currentAppt = allDates[i]
        var message = currentAppt.message
        var info = currentAppt.info
        var date = currentAppt.date
        var time = currentAppt.time
        var monthName = currentAppt.monthName

        var fullApptListing = `Date: ` + monthName + ` ` + date + ` ` + time + ` Phone #: ` + info + ` Notes: ` + message
        apptsString += `<li>` + fullApptListing + `</li>`

        // Push fullApptListing unto an array or something, then have that information be JSON.stringify for allAppts
      }

      allAppts.innerHTML = `<ul>` + apptsString + `</ul>`
    })
  })
})
