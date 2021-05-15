document.addEventListener('DOMContentLoaded', () => {
  (cardConfigInit = () => {
    const configBlocks = document.querySelectorAll('.card-config')
    for (elem of configBlocks) {
      rotatePhoto({
        block: elem,
        photoWrapSelector: '.card-config-img',
        swapButtonSelector: '.card-config-img-turn__svg',
        backImgSelector: '.card-config-img__item.back'
      })
      changeColor(elem)
    }
  })();

  switchTabs({
    tabsWrapSelector: '.card-coating-tabs',
    tabsClass: 'card-coating-tabs__item',
    contentsSelector: '.card-coating-info__item'
  });

  floatingBlockInit('.card-floating__wrapper');

  const sliderCoating = new Swiper('.card-coating-tabs__slider', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    wrapperClass: 'card-coating-tabs'
  });
})
