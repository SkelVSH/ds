initInteractivePhoto = ({ buttonSelector, containerSelector}) => {
  const container = document.querySelector(containerSelector)
  const button = container.querySelector(buttonSelector)
  const photoWrap = container.querySelector(':scope > div')
  const leftImgWidth = container.querySelector(':scope > img').scrollWidth
  const containerWidth = container.scrollWidth
  const buttonWidth = button.scrollWidth
  const leftPhotoWidthRelation = containerWidth / leftImgWidth
  
  startMoving = (e) => {
    let clientX = e.clientX

    if(e.type === 'touchstart') {
      clientX = e.changedTouches[0].clientX
    }

    const shiftX = clientX - button.getBoundingClientRect().left

    button.classList.add('active')

    onMouseMove = (e) => {
      let event = e

      if(e.type === 'touchmove') {
        event = e.changedTouches[0]
      }

      let newWidth = containerWidth - (event.pageX - container.offsetLeft - shiftX + buttonWidth / 2)
      
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
      container.removeEventListener('touchmove', onMouseMove)
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