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
  changeColor = (mainBlock) => {
    const colorsWrap = mainBlock.querySelector('.card-config-main-colors')
    const colors = colorsWrap.querySelectorAll('.card-config-main-colors-item')
    colorsWrap.addEventListener('click', (e) => {
      if (e.target.classList.contains('card-config-main-colors-item') && !e.target.classList.contains('active')) {
        for (elem of colors) {
          if (elem.classList.contains('active')) {
            elem.classList.remove('active')
            break
          }
        }
        e.target.classList.add('active')
      }
    })
  }
  (cardConfigInit = () => {
    const mainBlocks = document.querySelectorAll('.card-config')
    for (elem of mainBlocks) {
      rotatePhoto(elem)
      changeColor(elem)
    }
  })();
  switchTabs = ({ tabsWrapSelector, tabsClass, contentsSelector }) => {
    const tabsWrap = document.querySelector(tabsWrapSelector)
    const tabs = tabsWrap.querySelectorAll(`.${tabsClass}`)
    const contents = document.querySelectorAll(contentsSelector)
    tabsWrap.addEventListener('click', (e) => {
      if (e.target.classList.contains(tabsClass)) {
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].classList.contains('active')) {
            tabs[i].classList.remove('active')
            contents[i].classList.add('fade')
            setTimeout(() => {
              contents[i].classList.remove('active')
            }, 150)
            break
          }
        }
        e.target.classList.add('active')
        setTimeout(() => {
          const chosenContent = contents[Array.from(tabs).indexOf(e.target)]
          chosenContent.classList.add('active')
          chosenContent.classList.remove('fade')
        }, 150)
      }
    })
  }
  switchTabs({
    tabsWrapSelector: '.card-coating-tabs',
    tabsClass: 'card-coating-tabs__item',
    contentsSelector: '.card-coating-info__item'
  });
  (floatingBlockInit = () => {
    const floatingBlockWrap = document.querySelector('.card-floating__wrapper')
    const floatingBlock = floatingBlockWrap.querySelector('.card-floating')
    let floatingBlockHeight = 132
    if (document.documentElement.clientWidth <= 768) {
      floatingBlockHeight = 172
    }
    window.addEventListener('scroll', () => {
      if (floatingBlockWrap.getBoundingClientRect().y <= document.documentElement.clientHeight - floatingBlockHeight) {
        floatingBlock.classList.remove('float')
      }
      else {
        floatingBlock.classList.add('float')
      }
    })
  })();
})