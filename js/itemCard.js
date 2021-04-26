(() => {
  /* Скрипт для тестирования формы для быстрого заказа, при переносе удалить! */
  (fastOrder = () => {
    const form = document.querySelector('.card-config-main-form')
    const success = document.querySelector('.card-config-main-form-success')
    const input = form.querySelector('.card-config-main-form__input')
    const submitButton = form.querySelector('.card-config-main-form__submit')
    input.addEventListener('keyup', (e) => {
      if(input.value.length !== 0) {
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
  })();

  (rotatePhoto = () => {
    const photoWrap = document.querySelector('.card-config-img')
    const swapButton = photoWrap.querySelector('.card-config-img-turn__svg')
    const backImg = photoWrap.querySelector('.card-config-img__item.back')
    swapButton.addEventListener('click', () => {
      if(photoWrap.classList.contains('back_active')) {
        backImg.classList.remove('active')
        setTimeout(() => {
          photoWrap.classList.remove('back_active')
        },150)
      }
      else {
        photoWrap.classList.add('back_active')
        setTimeout(() => {
          backImg.classList.add('active')
        },150)
      }
    })
  })();
})();