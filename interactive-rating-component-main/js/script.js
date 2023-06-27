const rating = document.querySelector('.rating')
const thanks = document.querySelector('.thank-you')
const submitButton = document.querySelector('#submit')
const rate = document.querySelector('#rate')
const btnRates = document.querySelectorAll('.btn-rate')

submitButton.addEventListener('click', () => {
  rating.classList.add('hidden')
  thanks.classList.remove('hidden')
})

btnRates.forEach((buttonRate) => {
  buttonRate.addEventListener('click', () => {
    submitButton.removeAttribute("disabled")
    rate.innerHTML = buttonRate.innerHTML
  })
})