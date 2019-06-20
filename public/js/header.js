const loginLink = document.querySelector("form[name=home-link]")
const calendarLink = document.querySelector("form[name=calendar-link]")

loginLink.addEventListener("submit", (e) => {
  e.preventDefault()

  window.location.href="/"
})

calendarLink.addEventListener("submit", (e) => {
  e.preventDefault()

  window.location.href="/calendar"
})
