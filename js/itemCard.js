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

changeColor = (mainBlock, floatingBlock) => {
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

changeKit = (mainBlock, floatingBlock) => {
  const kitsWrap = mainBlock.querySelector('.card-config-main-kit__wrap')
  const kits = kitsWrap.querySelectorAll('.card-config-main-kit-item')
  /*
  const floatingBlockSeries = floatingBlock.querySelector('.card-floating-specs__item.series .card-floating-specs__value')
  const floatingBlockOldPrice = floatingBlock.querySelector('.card-floating-cost__old')
  const floatingBlockNewPrice = floatingBlock.querySelector('.card-floating-cost__new')
  const floatingBlockCommonPrice = floatingBlock.querySelector('.card-floating-cost__common')
  */
  kitsWrap.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-config-main-kit-item') && !e.target.classList.contains('active')) {
      for (elem of kits) {
        if (elem.classList.contains('active')) {
          elem.classList.remove('active')
          break
        }
      }
      e.target.classList.add('active')
      /*
      const series = e.target.querySelector('.card-config-main-kit-item__series span').innerHTML.trim()
      const newPrice = e.target.querySelector('.card-config-main-kit-item__new_price').innerHTML.trim()
      const oldPrice = e.target.querySelector('.card-config-main-kit-item__old_price').innerHTML.trim()
      const commonPrice = e.target.querySelector('.card-config-main-kit-item__price').innerHTML.trim()
      floatingBlockSeries.innerHTML = series
      if(commonPrice.length !== 0) {
        floatingBlockCommonPrice.innerHTML = commonPrice
      }
      else {
        floatingBlockNewPrice.innerHTML = newPrice
        floatingBlockOldPrice.innerHTML = oldPrice
      }
      */
    }
  })
}

(cardConfigInit = () => {
  const mainBlocks = document.querySelectorAll('.card-config')
  const floatingBlock = document.querySelector('.card-floating')
  for (elem of mainBlocks) {
    fastOrder(elem)
    rotatePhoto(elem)
    changeColor(elem, floatingBlock)
    changeKit(elem, floatingBlock)
  }
})();


/*
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

(initSpecsSlider = () => {
  if (document.documentElement.clientWidth <= 768) {
    const specsSlider = new Swiper('.card-specs-tables-item__slider.swiper-container', {
      slidesPerView: 'auto',
      freeMode: true
    })
  }
})();
*/

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

(switchCoatingTabs = () => {
  const tabsWrap = document.querySelector('.card-coating-tabs')
  const tabs = tabsWrap.querySelectorAll('.card-coating-tabs__item')
  const contents = document.querySelectorAll('.card-coating-info__item')
  tabsWrap.addEventListener('click', (e) => {
    if(e.target.classList.contains('card-coating-tabs__item')) {
      for(let i = 0; i < tabs.length; i++) {
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
      },150)
    }
  })
})();