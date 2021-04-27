
/* Скрипт для тестирования формы для быстрого заказа. При переносе нужно подогнать форму под стандарт сайта и удалить этот скрипт! */
(fastOrder = () => {
  const form = document.querySelector('.card-config-main-form')
  const success = document.querySelector('.card-config-main-form-success')
  const input = form.querySelector('.card-config-main-form__input')
  const submitButton = form.querySelector('.card-config-main-form__submit')
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
})();

(rotatePhoto = () => {
  const photoWrap = document.querySelector('.card-config-img')
  const swapButton = photoWrap.querySelector('.card-config-img-turn__svg')
  const backImg = photoWrap.querySelector('.card-config-img__item.back')
  swapButton.addEventListener('click', () => {
    if (photoWrap.classList.contains('back_active')) {
      backImg.classList.remove('active')
      setTimeout(() => {
        photoWrap.classList.remove('back_active')
      }, 150)
    }
    else {
      photoWrap.classList.add('back_active')
      setTimeout(() => {
        backImg.classList.add('active')
      }, 150)
    }
  })
})();

(switchSpecsTabs = () => {
  const tabs = document.querySelectorAll('.card-specs-tabs__item')
  const tables = document.querySelectorAll('.card-specs-tables-item')
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (e) => {
      for (let j = 0; j < tables.length; j++) {
        tables[j].classList.remove('active')
        tabs[j].classList.remove('active')
      }
      tables[i].classList.add('active')
      tabs[i].classList.add('active')
    })
  }
})();
/*
(initSpecsSlider = () => {
  if (document.documentElement.clientWidth <= 768) {
    const specsSlider = new Swiper('.card-specs-tables-item__slider.swiper-container', {
      slidesPerView: 'auto',
      freeMode: true
    })
  }
})();
*/