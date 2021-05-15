document.addEventListener('DOMContentLoaded', () => {
  (cardConfigInit = () => {
    const configBlocks = document.querySelectorAll('.card-config')
    for (elem of configBlocks) {
      rotatePhoto({
        block: elem,
        photoWrapSelector: '.card-config-img',
        swapButtonSelector: '.card-config-img-turn__svg',
        backImgSelector: '.card-config-img__item.back',
        coverTitlesSelector: '.card-config-cover_type'
      })
    }
  })();
})
