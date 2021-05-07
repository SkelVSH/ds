document.addEventListener('DOMContentLoaded', () => {
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
  (cardConfigInit = () => {
    const mainBlocks = document.querySelectorAll('.card-config')
    for (elem of mainBlocks) {
      rotatePhoto(elem)
    }
  })();
})