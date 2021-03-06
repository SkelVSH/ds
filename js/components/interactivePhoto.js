initInteractivePhoto = ({ buttonSelector, containerSelector}) => {
  const container = document.querySelector(containerSelector)
  const button = container.querySelector(buttonSelector)
  const photoWrap = container.querySelector(':scope > div')
  const containerWidth = container.scrollWidth
  const buttonWidth = button.scrollWidth
  
  startMoving = (e) => {
    const clientX = e.type === 'touchstart' ? e.changedTouches[0].clientX : e.clientX
    const shiftX = clientX - button.getBoundingClientRect().left

    button.classList.add('active')

    onMouseMove = (e) => {
      const event = e.type === 'touchmove' ? e.changedTouches[0] : e

      let newWidth = containerWidth - (event.pageX - container.offsetLeft - shiftX + buttonWidth / 2)
      if (newWidth > containerWidth) {
        newWidth = containerWidth
      }
      if (newWidth < 0) {
        newWidth = 0
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