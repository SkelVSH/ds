document.addEventListener('DOMContentLoaded', () => {
  const imgBlock = document.querySelector('.card-config')
  rotatePhoto({
    block: imgBlock,
    photoWrapSelector: '.card-config',
    swapButtonSelector: '.card-config-img-turn__svg',
    backImgSelector: '.card-config-img_wrap.back',
    coverTitlesSelector: '.card-config-cover_type'
  });

  /* ПЕРЕРАБОТАТЬ ЭТУ ЧАСТЬ ПОСЛЕ НАТЯЖКИ ИЛИ УБРАТЬ */
  (formInteraction = () => {
    const openFormLink = document.querySelector('.concept__priceCard-managerNumber__order_call')
    const formWrap = document.querySelector('.concept__form__wrap')
    const form = formWrap.querySelector('form')
    const sendSuccess = formWrap.querySelector('.concept__form_success')
    const formOuter = formWrap.querySelector('.concept__form__outer')
    const sendButton = formWrap.querySelector('#concept__form__send')
    const testInput = formWrap.querySelector('#concept__form__field__name')
    const closeFormButtons = formWrap.querySelectorAll('.concept__form__close')
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
})