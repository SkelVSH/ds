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