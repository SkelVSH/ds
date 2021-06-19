showSpecsHelp = (helpButtonSelector) => {
  const helpButtons = document.querySelectorAll(helpButtonSelector)
  for (let elem of helpButtons) {
    elem.addEventListener('click', () => {
      for(let button of helpButtons) {
        if(button !== elem) button.parentNode.nextElementSibling.classList.remove('active')
      }
      elem.parentNode.nextElementSibling.classList.toggle('active')
    })
  }
}