document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const requisOpenButton = body.querySelector('.footer__copyright-requisites')
  const requisWrap = body.querySelector('.requis__wrap')
  const requisCloseButton = requisWrap.querySelector('.requis__close')
  const copyButton = requisWrap.querySelector('.requis__button')
  const copyHint = requisWrap.querySelector('.requis__hint')

  const closeRequis = () => {
    requisWrap.classList.remove('fade')
    setTimeout(() => requisWrap.classList.remove('active'), 300)
    body.classList.remove('body--fixed')
  }

  requisWrap.addEventListener('click', (e) => {
    if(e.target.classList.contains('requis__wrap')) {
      closeRequis()
    }
  })

  requisOpenButton.addEventListener('click', (e) => {
    e.preventDefault()
    requisWrap.classList.add('active')
    setTimeout(() => requisWrap.classList.add('fade'), 0)
    body.classList.add('body--fixed')
  })

  requisCloseButton.addEventListener('click', () => {
    closeRequis()
  })

  copyButton.addEventListener('click', (e) => {
    e.preventDefault()
    copyHint.classList.add('active')
    navigator.clipboard.writeText('OOO «Дверной сезон» 213105, Республика Беларусь, Могилёвская обл., Могилёвский р-н, Вейнянский с/с, 18, офис 46 В Торговом реестре с 26.03.2015 УНП 790823530 Свидетельство о государственной регистрации выдано Могилёвским облисполком от 12.04.13')
  })
})