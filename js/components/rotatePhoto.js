rotatePhoto = ({ block, photoWrapSelector, swapButtonSelector, backImgSelector, coverTitlesSelector }) => {
  let photoWrap = block.querySelector(photoWrapSelector)
  if(!photoWrap) {
    photoWrap = block.parentNode.querySelector(photoWrapSelector)
  }
  const swapButton = photoWrap.querySelector(swapButtonSelector)
  const backImg = photoWrap.querySelector(backImgSelector)
  const coverTitles = coverTitlesSelector ? block.querySelectorAll(coverTitlesSelector) : []

  blockButton = () => {
    swapButton.classList.add('disabled')
    setTimeout(() => {
      swapButton.classList.remove('disabled')
    }, 300)
  }

  swapButton.addEventListener('click', (e) => {
    e.stopImmediatePropagation()
    blockButton()
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
    for (elem of coverTitles) {
      elem.classList.toggle('checked')
    }
  })
}