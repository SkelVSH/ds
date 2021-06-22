document.addEventListener('DOMContentLoaded', () => {
  (cardConfigInit = () => {
    const configBlocks = document.querySelectorAll('.card-config')
    for (elem of configBlocks) {
      fastOrderInit({
        configBlock: elem,
        formSelector: '.card-config-main-form',
        successSelector: '.card-config-main-form-success',
        inputSelector: '.card-config-main-form__input',
        submitButtonSelector: '.card-config-main-form__submit'
      })
      rotatePhoto({
        block: elem,
        photoWrapSelector: '.card-config-img',
        swapButtonSelector: '.card-config-img-turn__svg',
        backImgSelector: '.card-config-img__item.back'
      })
    }
  })();
  
  floatingBlockInit('.card-floating__wrapper');
  showSpecsHelp('.card-specs-tables-item__help');
  
  switchTabs({
    tabsWrapSelector: '.card-coating-tabs',
    tabsClass: 'card-coating-tabs__item',
    contentsSelector: '.card-coating-info__item'
  });
  
  switchTabs({
    tabsWrapSelector: '.card-specs-tabs .wrapper',
    tabsClass: 'card-specs-tabs__item',
    contentsSelector: '.card-specs-tables-item'
  });
  
  initInteractivePhoto({
    buttonSelector: '.card-additions-slider-right__button',
    containerSelector: '.card-additions-slider',
  });
  
  const sliderCoating = new Swiper('.card-coating-tabs__slider', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    wrapperClass: 'card-coating-tabs'
  });
  
  const sliderSpecs = new Swiper('.card-specs-tabs .wrapper .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 0
  });
  
  const sliderSimilar = new Swiper('.card-similar-slider.swiper-container', {
    navigation: {
      nextEl: '.card-similar__arrow.next',
      prevEl: '.card-similar__arrow.prev',
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 70,
      }
    }
  });
})