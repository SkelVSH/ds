initInteractivePhoto = ({ buttonSelector, containerSelector}) => {
  const container = document.querySelector(containerSelector)
  const button = container.querySelector(buttonSelector)
  const photoWrap = container.querySelector(':scope > div')
  const leftImgWidth = container.querySelector(':scope > img').scrollWidth
  const containerWidth = container.scrollWidth
  const buttonWidth = button.scrollWidth
  const leftPhotoWidthRelation = containerWidth / leftImgWidth
  
  startMoving = (e) => {
    const shiftX = e.clientX - button.getBoundingClientRect().left
    button.classList.add('active')

    onMouseMove = (e) => {
      let newWidth = containerWidth - (e.pageX - container.offsetLeft - shiftX + buttonWidth / 2)
      if (newWidth > containerWidth) {
        newWidth = containerWidth
      }
      if (newWidth < containerWidth * (1 - 1 / leftPhotoWidthRelation)) {
        newWidth = containerWidth * (1 - 1 / leftPhotoWidthRelation)
      }
      photoWrap.style.width = newWidth + 'px'
    }

    onMouseUp = () => {
      button.classList.remove('active')
      container.removeEventListener('mousemove', onMouseMove)
    }

    container.addEventListener('touchmove',onMouseMove)
    container.addEventListener('mousemove', onMouseMove)
    document.addEventListener('touchend', onMouseUp)
    document.addEventListener('mouseup', onMouseUp)
  }

  button.addEventListener('touchstart', startMoving)
  button.addEventListener('mousedown', startMoving)

  button.ondragstart = () => false
}