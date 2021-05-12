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