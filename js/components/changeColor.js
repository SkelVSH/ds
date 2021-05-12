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