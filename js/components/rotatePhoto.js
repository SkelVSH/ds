rotatePhoto = ({ block, photoWrapSelector, swapButtonSelector, backImgSelector, coverTitlesSelector }) => {
  console.log(block)
  console.log(photoWrapSelector)
  const photoWrap = block.parentNode.querySelector(photoWrapSelector)
  const swapButton = photoWrap.querySelector(swapButtonSelector)
  const backImg = photoWrap.querySelector(backImgSelector)
  const coverTitles = block.querySelectorAll(coverTitlesSelector)

  blockButton = () => {
    swapButton.classList.add('disabled')
    setTimeout(() => {
      swapButton.classList.remove('disabled')
    }, 300)
  }

  swapButton.addEventListener('click', () => {
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