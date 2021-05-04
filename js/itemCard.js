/* Скрипт для тестирования формы для быстрого заказа. При переносе нужно подогнать форму под стандарт сайта и удалить этот скрипт! */
fastOrder = (block) => {
  const form = block.querySelector('.card-config-main-form')
  const success = block.querySelector('.card-config-main-form-success')
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
}

rotatePhoto = (block) => {
  const photoWrap = block.querySelector('.card-config-img')
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
}

changeColor = (mainBlock) => {
  const colorsWrap = mainBlock.querySelector('.card-config-main-colors')
  const colors = colorsWrap.querySelectorAll('.card-config-main-colors-item')
  colorsWrap.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-config-main-colors-item') && !e.target.classList.contains('active')) {
      for (elem of colors) {
        if (elem.classList.contains('active')) {
          elem.classList.remove('active')
          break
        }
      }
      e.target.classList.add('active')
    }
  })
}

changeKit = (mainBlock) => {
  const kitsWrap = mainBlock.querySelector('.card-config-main-kit__wrap')
  const kits = kitsWrap.querySelectorAll('.card-config-main-kit-item')
  kitsWrap.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-config-main-kit-item') && !e.target.classList.contains('active')) {
      for (elem of kits) {
        if (elem.classList.contains('active')) {
          elem.classList.remove('active')
          break
        }
      }
      e.target.classList.add('active')
    }
  })
}

(cardConfigInit = () => {
  const mainBlocks = document.querySelectorAll('.card-config')
  const floatingBlock = document.querySelector('.card-floating')
  for (elem of mainBlocks) {
    fastOrder(elem)
    rotatePhoto(elem)
    changeColor(elem)
    changeKit(elem)
  }
})();

(floatingBlockInit = () => {
  const floatingBlockWrap = document.querySelector('.card-floating__wrapper')
  const floatingBlock = floatingBlockWrap.querySelector('.card-floating')
  let floatingBlockHeight = 132
  if (document.documentElement.clientWidth <= 768) {
    floatingBlockHeight = 172
  }
  window.addEventListener('scroll', () => {
    if (floatingBlockWrap.getBoundingClientRect().y <= document.documentElement.clientHeight - floatingBlockHeight) {
      floatingBlock.classList.remove('float')
    }
    else {
      floatingBlock.classList.add('float')
    }
  })
})();

(similarSliderInit = () => {
  const slider = new Swiper('.card-similar-slider.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 70,
    navigation: {
      nextEl: '.card-similar__arrow.next',
      prevEl: '.card-similar__arrow.prev',
    },
    loop: true,
  })
})();

switchTabs = ({tabsWrapSelector, tabsClass, contentsSelector}) => {
  const tabsWrap = document.querySelector(tabsWrapSelector)
  const tabs = tabsWrap.querySelectorAll(`.${tabsClass}`)
  const contents = document.querySelectorAll(contentsSelector)
  tabsWrap.addEventListener('click', (e) => {
    if (e.target.classList.contains(tabsClass)) {
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].classList.contains('active')) {
          tabs[i].classList.remove('active')
          contents[i].classList.add('fade')
          setTimeout(() => {
            contents[i].classList.remove('active')
          }, 150)
          break
        }
      }
      e.target.classList.add('active')
      setTimeout(() => {
        const chosenContent = contents[Array.from(tabs).indexOf(e.target)]
        chosenContent.classList.add('active')
        chosenContent.classList.remove('fade')
      }, 150)
    }
  })
}

initInteractivePhoto({
  buttonSelector: '.card-additions-slider-right__button',
  containerSelector: '.card-additions-slider',
  rightPhotoWrapSelector: '.card-additions-slider-right__wrap',
  leftPhotoWidthRelation: 2
});

(showSpecsHelp = () => {
  helpButtons = document.querySelectorAll('.card-specs-tables-item__help')
  for (let elem of helpButtons) {
    elem.addEventListener('click', () => {
      elem.nextElementSibling.classList.toggle('active')
    })
  }
})();

switchTabs({
  tabsWrapSelector: '.card-coating-tabs',
  tabsClass: 'card-coating-tabs__item',
  contentsSelector: '.card-coating-info__item'
})

switchTabs({
  tabsWrapSelector: '.card-specs-tabs .wrapper',
  tabsClass: 'card-specs-tabs__item',
  contentsSelector: '.card-specs-tables-item'
})
