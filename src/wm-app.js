function showMonetizationState() {
  document.getElementById('state').innerText = document.monetization.state

  if(document.monetization.state === "pending"){
    console.log('still pending...')
  }else 
    if(document.monetization.state === "stopped"){
      console.log('monetization is stopped')
      document.getElementById('exclusive').classList.add('hidden');
  }else{
    console.log('monetization is started')
    document.getElementById('exclusive').classList.remove('hidden');
  }
}

if (document.monetization) {
  document.monetization.addEventListener('monetizationstop', showMonetizationState)
  document.monetization.addEventListener('monetizationpending', showMonetizationState)
  document.monetization.addEventListener('monetizationstart', showMonetizationState)
}

window.addEventListener('load', () => {
  if (!document.monetization) {
    document.getElementById('state').innerText = 'Not enabled in browser';
    document.getElementById('exclusive').classList.add('hidden');
  } else {
    showMonetizationState()
  }

  const stopButton = document.getElementById('stop-button')
  const startButton = document.getElementById('start-button')
  const monetizationTag = document.querySelector('meta[name="monetization"]')

  // stop button
  stopButton.addEventListener('click', () => {
    monetizationTag.remove()

    stopButton.disabled = true
    startButton.disabled = false
  })

  // start button
  startButton.addEventListener('click', () => {
    document.head.appendChild(monetizationTag)

    stopButton.disabled = false
    startButton.disabled = true
  })
})