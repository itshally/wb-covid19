function showMonetizationState() {
  document.getElementById('state').innerText = document.monetization.state
}

if (document.monetization) {
  document.monetization.addEventListener('monetizationstop', showMonetizationState)
  document.monetization.addEventListener('monetizationpending', showMonetizationState)
  document.monetization.addEventListener('monetizationstart', showMonetizationState)
}

window.addEventListener('load', () => {
  if (!document.monetization) {
    document.getElementById('state').innerText = 'Not enabled in browser'
  } else {
    showMonetizationState()
  }

  const stopButton = document.getElementById('stop-button')
  const startButton = document.getElementById('start-button')
  const monetizationTag = document.querySelector('meta[name="monetization"]')

  //removes the monetization tag when the app starts loading
  monetizationTag.remove();

  stopButton.addEventListener('click', () => {
    monetizationTag.remove()

    stopButton.disabled = true
    startButton.disabled = false

    document.getElementById('exclusive').classList.add('App_hidden__3gJL7')
  })

  startButton.addEventListener('click', () => {
    document.head.appendChild(monetizationTag)

    stopButton.disabled = false
    startButton.disabled = true

    document.getElementById('exclusive').classList.remove('App_hidden__3gJL7')

  })
})