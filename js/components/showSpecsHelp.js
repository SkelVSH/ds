showSpecsHelp = (helpButtonSelector) => {
  const helpButtons = document.querySelectorAll(helpButtonSelector)
  for (let elem of helpButtons) {
    elem.addEventListener('click', () => {
      elem.parentNode.nextElementSibling.classList.toggle('active')
    })
  }
}