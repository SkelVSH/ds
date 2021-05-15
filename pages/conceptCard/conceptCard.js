document.addEventListener('DOMContentLoaded', () => {
  const imgBlock = document.querySelector('.card-config')
  rotatePhoto({
    block: imgBlock,
    photoWrapSelector: '.card-config',
    swapButtonSelector: '.card-config-img-turn__svg',
    backImgSelector: '.card-config-img_wrap.back',
    coverTitlesSelector: '.card-config-cover_type'
  })
})