document.addEventListener('DOMContentLoaded', () => {
  /* ПЕРЕРАБОТАТЬ ЭТУ ЧАСТЬ ПОСЛЕ НАТЯЖКИ ИЛИ УБРАТЬ */
  fastOrder = (configBlock) => {
    const form = configBlock.querySelector('.card-config-main-form')
    const success = configBlock.querySelector('.card-config-main-form-success')
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

  changeKit = (configBlock) => {
    const kitsWrap = configBlock.querySelector('.card-config-main-kit__wrap')
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

  (showSpecsHelp = () => {
    const helpButtons = document.querySelectorAll('.card-specs-tables-item__help')
    for (let elem of helpButtons) {
      elem.addEventListener('click', () => {
        elem.parentNode.nextElementSibling.classList.toggle('active')
      })
    }
  })();

  /* ПЕРЕРАБОТАТЬ ЭТУ ЧАСТЬ ПОСЛЕ НАТЯЖКИ ИЛИ УБРАТЬ */
  (formInteraction = () => {
    const openFormLink = document.querySelector('.card-floating-cost__cheaper')
    const formWrap = document.querySelector('.card-cheaper_form__wrap')
    const form = formWrap.querySelector('form')
    const sendSuccess = formWrap.querySelector('.card-cheaper_form_success')
    const formOuter = formWrap.querySelector('.card-cheaper_form__outer')
    const sendButton = formWrap.querySelector('#card-cheaper_form__send')
    const testInput = formWrap.querySelector('#card-cheaper_form__field__price')
    const closeFormButtons = formWrap.querySelectorAll('.card-cheaper_form__close')
    const body = document.querySelector('body')
    openForm = () => {
      formWrap.classList.add('active')
      setTimeout(() => {
        formWrap.classList.add('fade')
      },0)
      body.classList.add('body-fixed')
    }
    closeForm = () => {
      formWrap.classList.remove('fade')
      body.classList.remove('body-fixed')
      setTimeout(() => {
        formWrap.classList.remove('active')
        form.classList.add('active')
        sendSuccess.classList.remove('active')
      },300)
    }
    openFormLink.addEventListener('click', () => {
      openForm()
    })
    for(let elem of closeFormButtons) {
      elem.addEventListener('click', () => {
        closeForm()
      })
    }
    formOuter.addEventListener('click', () => {
      closeForm()
    })
    
    testInput.addEventListener('keyup', () => {
      if (testInput.value.length >= 1) {
        sendButton.classList.remove('disabled')
      }
      else {
        sendButton.classList.add('disabled')
      }
    })
    sendButton.addEventListener('click', (e) => {
      e.preventDefault()
      if (sendButton.classList.contains('disabled')) return;
      form.classList.remove('active')
      sendSuccess.classList.add('active')
    })
  })();

  (cardConfigInit = () => {
    const configBlocks = document.querySelectorAll('.card-config')
    for (elem of configBlocks) {
      fastOrder(elem)
      rotatePhoto({
        block: elem,
        photoWrapSelector: '.card-config-img',
        swapButtonSelector: '.card-config-img-turn__svg',
        backImgSelector: '.card-config-img__item.back'
      })
      changeColor(elem)
      changeKit(elem)
    }
  })();

  const sliderCoating = new Swiper('.card-coating-tabs__slider', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    wrapperClass: 'card-coating-tabs'
  });

  const sliderSpecs = new Swiper('.card-specs-tabs .wrapper .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0
  });

  const sliderSimilar = new Swiper('.card-similar-slider.swiper-container', {
    navigation: {
      nextEl: '.card-similar__arrow.next',
      prevEl: '.card-similar__arrow.prev',
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 70,
      }
    }
  });

  floatingBlockInit('.card-floating__wrapper');

  switchTabs({
    tabsWrapSelector: '.card-coating-tabs',
    tabsClass: 'card-coating-tabs__item',
    contentsSelector: '.card-coating-info__item'
  });

  switchTabs({
    tabsWrapSelector: '.card-specs-tabs .wrapper',
    tabsClass: 'card-specs-tabs__item',
    contentsSelector: '.card-specs-tables-item'
  });

  initInteractivePhoto({
    buttonSelector: '.card-additions-slider-right__button',
    containerSelector: '.card-additions-slider',
  });
})