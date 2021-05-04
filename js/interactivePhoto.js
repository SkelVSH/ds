initInteractivePhoto = ({ buttonSelector, containerSelector, rightPhotoWrapSelector, leftPhotoWidthRelation }) => {
  const button = document.querySelector(buttonSelector)
  const container = document.querySelector(containerSelector)
  const photoWrap = document.querySelector(rightPhotoWrapSelector)
  const buttonWidth = button.scrollWidth
  const containerWidth = container.scrollWidth

  button.addEventListener('mousedown', (e) => {
    const shiftX = e.clientX - button.getBoundingClientRect().left

    move = (pageX) => {
      let newWidth = containerWidth - (pageX - container.offsetLeft - shiftX + buttonWidth / 2)
      if (newWidth > containerWidth) {
        newWidth = containerWidth
      }
      if (newWidth < containerWidth * (1 - 1 / leftPhotoWidthRelation)) {
        newWidth = containerWidth * (1 - 1 / leftPhotoWidthRelation)
      }
      photoWrap.style.width = newWidth + 'px'
    }

    onMouseMove = (e) => {
      move(e.pageX)
    }

    container.addEventListener('mousemove', onMouseMove)

    document.addEventListener('mouseup', () => {
      container.removeEventListener('mousemove', onMouseMove)
    })
  })

  button.ondragstart = () => false
}