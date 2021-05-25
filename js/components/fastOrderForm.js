/* ПЕРЕРАБОТАТЬ ЭТУ ЧАСТЬ ПОСЛЕ НАТЯЖКИ ИЛИ УБРАТЬ */
fastOrderInit = ({configBlock, formSelector, successSelector, inputSelector, submitButtonSelector}) => {
  const form = configBlock.querySelector(formSelector)
  const success = configBlock.querySelector(successSelector)
  const input = form.querySelector(inputSelector)
  const submitButton = form.querySelector(submitButtonSelector)
  input.addEventListener('keyup', () => {
    if (input.value.length !== 0) {
      submitButton.classList.remove('disabled')
    }
    else {
      submitButton.classList.add('disabled')
    }
  })
  submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    form.style.display = 'none'
    success.style.display = 'flex'
  })
}