rotatePhoto = ({ block, photoWrapSelector, swapButtonSelector, backImgSelector, coverTitlesSelector }) => {
  let photoWrap = block.querySelector(photoWrapSelector)
  if(!photoWrap) {
    photoWrap = block.parentNode.querySelector(photoWrapSelector)
  }
  const swapButton = photoWrap.querySelector(swapButtonSelector)
  const backImg = photoWrap.querySelector(backImgSelector)
  const coverTitles = coverTitlesSelector ? block.querySelectorAll(coverTitlesSelector) : []

  swapButton.addEventListener('click', (e) => {
    e.stopImmediatePropagation()
    if (photoWrap.classList.contains('back_active')) {
      backImg.classList.remove('active')
      setTimeout(() => {
        photoWrap.classList.remove('back_active')
        swapButton.nextElementSibling.innerHTML = "Отделка внутри"
      }, 150)
    }
    else {
      photoWrap.classList.add('back_active')
      setTimeout(() => {
        backImg.classList.add('active')
        swapButton.nextElementSibling.innerHTML = "Отделка снаружи"
      }, 150)
    }
    for (elem of coverTitles) {
      elem.classList.toggle('checked')
    }
  })
}