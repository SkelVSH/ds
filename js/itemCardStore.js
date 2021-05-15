document.addEventListener('DOMContentLoaded', () => {
  (cardConfigInit = () => {
    const configBlocks = document.querySelectorAll('.card-config')
    for (elem of configBlocks) {
      rotatePhoto(elem)
    }
  })();
})
