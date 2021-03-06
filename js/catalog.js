window.onload = () => {
    const filters = document.querySelectorAll('.filter');
    const clearFiltersBtn = document.getElementById('clearFilters')
    const popularFilter = document.querySelectorAll('.filter__filterSelect-title');
    const filterOptions = document.querySelectorAll('.filter__filterOptionsBlock')
    const pagingList = document.querySelector('.catalog__pagingList');
    const textWrapperBtn = document.querySelector('.catalog__chooseDescription-btn');
    const mobileFilterToggler = document.querySelector('.filter__filterMenu-filterToggler')
    const mobileDoorTypeToggler = document.querySelector('.filter__filterMenu-doorType')
    const filterBlock = document.querySelector('.filter__filterMenu-doorOptionsBlock');


    const filterClickHandler = (e) => {
        const targetLastClassName = e.currentTarget.classList[e.currentTarget.classList.length - 1];
        const activeFilter = document.querySelector(`.${targetLastClassName}-active`)

        if (targetLastClassName.endsWith('active')) {
            e.currentTarget.classList.remove(`${targetLastClassName}`);
            removeFilterBread(e.currentTarget.innerText);
        } else if (activeFilter) {
            activeFilter.classList.remove(`${targetLastClassName}-active`);
            e.currentTarget.classList.add(`${targetLastClassName}-active`);
            changeFilterBread(activeFilter.innerText, e.currentTarget.innerText);
        } else {
            e.currentTarget.classList.add(`${targetLastClassName}-active`)
            addFilterBread(e.currentTarget.innerText);
        }

        isActiveFilterExist() ? showClearFiltersBtn() : hideClearFiltersBtn();
    }

    const showClearFiltersBtn = () => clearFiltersBtn.style.display = 'flex';
    const hideClearFiltersBtn = () => clearFiltersBtn.style.display = 'none';

    const clearFilters = () => {
        filters.forEach((filter) => {
            if (filter.classList[filter.classList.length - 1].endsWith('active')) {
                removeFilterBread(filter.innerText)
                filter.classList.remove(filter.classList[filter.classList.length - 1]);
            }
        })

        hideClearFiltersBtn();
    }

    const isActiveFilterExist = () => {
        let isExist = false;

        filters.forEach((filter) => {
            if (filter.classList[filter.classList.length - 1].endsWith('active')) {
                isExist = true;
            }
        })

        return isExist;
    }
    
    const addFilterBread = (text) => {
        const item = document.createElement('li');
        item.classList.add('c-p3');
        item.classList.add('catalog__filterList-item');
        item.innerText = text;
        
        item.appendChild(createImg('../icons/dot.png'));

        document.getElementById('catalog__filterList').appendChild(item);
    }

    const changeFilterBread = (oldText, newText) => {
        const filterItems = document.querySelectorAll('.catalog__filterList-item');

        filterItems.forEach((item) => {
            if (item.innerText == oldText) {
                item.innerText = newText;

                
                item.appendChild(createImg('../icons/dot.png'));
            }
        })
    }

    const removeFilterBread = (text) => {
        const filterItems = document.querySelectorAll('.catalog__filterList-item');

        filterItems.forEach((item) => {
            if (item.innerText == text) {
                item.remove();
            }
        })
    }

    const filterOptionsToggle = (index) => (e) => {
        const menu = document.querySelectorAll('.filter__filterOptionsBlock')[index];
        menu.style.opacity = menu.style.opacity == '1' ? '0' : '1';
        menu.parentNode.querySelector('img').style.transform = menu.style.opacity == '1' ?  'rotate(180deg)' : 'rotate(0)';
    }

    const filterOptionClickHandler = (index) => (e) => {
        if (e.target.classList.contains('filter__filterOption')) {
            const menu = document.querySelector('.filter__filterOptionsBlock')[index];
            popularFilter[index].innerText = e.target.innerText;
            const img = createImg('./img/select_arrow.svg');
            img.style.transform = 'rotate(180deg)';
            popularFilter[index].appendChild(img);

            document.querySelectorAll('.filter__filterOption-active')[index + 1].classList.remove('filter__filterOption-active');
            e.target.classList.add('filter__filterOption-active');

            menu.style.display = 'none';
        }
    }

    const pageItemClickHandler = (e) => {
        if (e.target.classList.contains('catalog__pagingItem') && !(e.target.innerText == "...")) {
            document.querySelector('.catalog__pagingItem-active').classList.remove('catalog__pagingItem-active')
            e.target.classList.add('catalog__pagingItem-active')
        }
    }

    const textWrapperClickHandler = () => {
        const textWrapper = document.querySelector('.catalog__chooseDescription-textWrapper')
        textWrapper.style.height = textWrapper.style.height ==  '97%' ? '168px' : '97%';
        
        const img = createImg('../icons/arrow.svg');

        if (textWrapper.classList.contains('catalog__chooseDescription-textWrapper-active')) {
            textWrapper.classList.remove('catalog__chooseDescription-textWrapper-active');
            textWrapperBtn.innerText = '????????????????';
        } else {
            textWrapper.classList.add('catalog__chooseDescription-textWrapper-active');
            textWrapperBtn.innerText = '????????????';
            img.style.transform = 'rotate(180deg)';
        }

        textWrapperBtn.appendChild(img);
    }

    const mobileFilterToggle = () => {
        const filterBlock = document.querySelector('.catalog__filterWrapper'); 
        filterBlock.style.marginBottom = filterBlock.style.opacity == '1' ? '-680px' : '0';
        filterBlock.style.opacity = filterBlock.style.opacity == '1' ? '0' : '1';
    }

    const doorTypeToggle = () => {
        filterBlock.style.visibility = filterBlock.style.opacity == '1' ? 'hidden' : 'initial';
        filterBlock.style.opacity = filterBlock.style.opacity == '1' ? '0' : '1';
        const filterMenu = document.querySelector('.filter__filterMenu');
        const img = filterMenu.querySelector('.filter__filterMenu-doorType > img');
        img.style.transform = filterBlock.style.opacity == '1' ? 'rotate(180deg)' : 'rotate(0deg)'
        filterMenu.style.borderRadius = filterMenu.style.borderRadius == '5px 5px 0px 0px' ? '5px' : '5px 5px 0px 0px'
        filterMenu.style.borderBottom = filterMenu.style.borderBottom == 'none' ? '1px solid #F0F0F0' : 'none';
    }


    const doorTypeClickHandler = (e) => {
        mobileDoorTypeToggler.innerText = e.target.innerText;
        mobileDoorTypeToggler.appendChild(createImg('./img/select_arrow-black.svg'));
        document.querySelector('.filter__filterOption-active').classList.remove('filter__filterOption-active');
        e.target.classList.add('filter__filterOption-active');
    }


    filterBlock.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter__filterOption') && !e.target.classList.contains('filter__filterOption-active')) {
            e.target.parentNode.querySelector('.filter__filterOption-active').classList.remove('filter__filterOption-active')
            e.target.classList.add('filter__filterOption-active')
        }
    })
    popularFilter.forEach((item, index) => {
        item.addEventListener('click', filterOptionsToggle(index))
    });
    mobileDoorTypeToggler.addEventListener('click', doorTypeToggle);
    mobileFilterToggler.addEventListener('click', mobileFilterToggle);
    textWrapperBtn.addEventListener('click', textWrapperClickHandler)
    pagingList.addEventListener('click', pageItemClickHandler)
    filterOptions.forEach((filterOption, index) => {
        filterOption.addEventListener('click', window.screen.width > 768 ? filterOptionClickHandler(index) : doorTypeClickHandler)
    })
    clearFiltersBtn.addEventListener('click', clearFilters)
    filters.forEach((filter) => filter.addEventListener('click', filterClickHandler));
    
    
    
    
    
    
    
    
    

    const createImg = (path) => {
        const img = document.createElement('img');
        img.src = path;
    
        return img
    }
}
