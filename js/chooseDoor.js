document.addEventListener('DOMContentLoaded', () => {
  const importantChoiceBlocks = document.querySelectorAll('.choose_door-form-block.important')
  const form = document.querySelector('.choose_door-form')
  const button = document.querySelector('.choose_door-form-submit__button')
  const inputs = document.querySelectorAll('.choose_door__input')
  const result = document.querySelector('.choose_door-result')
  const resultBottom = document.querySelector('.choose_door-result-main')
  const dynamicText = document.querySelector('.choose_door-result__dynamic')

  const validateForm = () => {
    setTimeout(() => {
      for(let block of importantChoiceBlocks) {
        let checkedInputs = block.querySelectorAll('input:checked')
        if(checkedInputs.length === 0) {
          button.classList.add('disabled')
          return
        }
      }
      button.classList.remove('disabled')
    },0)
  }

  form.addEventListener('click', (e) => {
    if(e.target.classList.contains('choose_door-form-block-main-input__label')) {
      validateForm(e.target)
    }
  })

  button.addEventListener('click', (e) => {
    e.preventDefault()
    if(!button.classList.contains('disabled')) {
      const values = new Map()
      for(let elem of inputs) {
        if(elem.checked) {
          values.set(elem.getAttribute('name'),elem.getAttribute('value'))
        }
      }

      /** Смена динамичного текста в блоке результата */
      if(values.get('style') === 'classic') {
        dynamicText.innerHTML = 'классическом'
      }
      else if(values.get('style') === 'modern') {
        dynamicText.innerHTML = 'современном'
      }
      else {
        dynamicText.innerHTML = 'классическом или&nbsp;современном'
      }

      /** выходной объект с выбранными значениями */
      const output = Object.fromEntries(values)
      console.log(output)

      /** вывод блока с результатом */
      result.classList.add('active')
      resultBottom.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      })
    }
  })
})