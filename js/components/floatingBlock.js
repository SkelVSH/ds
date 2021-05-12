floatingBlockInit = (floatingBlockWrapSelector) => {
  const floatingBlockWrap = document.querySelector(floatingBlockWrapSelector)
  const floatingBlock = floatingBlockWrap.querySelector(':scope > div')
  let floatingBlockHeight = floatingBlockWrap.clientHeight
  window.addEventListener('scroll', () => {
    if (floatingBlockWrap.getBoundingClientRect().y <= document.documentElement.clientHeight - floatingBlockHeight) {
      floatingBlock.classList.remove('float')
    }
    else {
      floatingBlock.classList.add('float')
    }
  })
}