window.onload = () => {
    const filters = document.querySelectorAll('.filter');
    const clearFiltersBtn = document.getElementById('clearFilters')
    const popularFilter = document.querySelectorAll('.filter__filterSelect-title')[1];
    const filterOptions = document.querySelector('.filter__filterOptionsBlock')
    const pagingList = document.querySelector('.catalog__pagingList');
    const textWrapperBtn = document.querySelector('.catalog__chooseDescription-btn');
    const mobileFilterToggler = document.querySelector('.filter__filterMenu-filterToggler')
    const mobileDoorTypeToggler = document.querySelector('.filter__filterMenu-doorType')



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

    const filterOptionsToggle = () => {
        console.log('hello')
        const menu = document.querySelectorAll('.filter__filterOptionsBlock')[2];
        menu.style.display = menu.style.display == 'block' ?  'none' : 'block';
        console.log(menu)
    }

    const filterOptionClickHandler = (e) => {
        const menu = document.querySelector('.filter__filterOptionsBlock');

        popularFilter.innerText = e.target.innerText;
        popularFilter.appendChild(createImg('./img/select_arrow.svg'));

        document.querySelector('.filter__filterOption-active').classList.remove('filter__filterOption-active');
        e.target.classList.add('filter__filterOption-active');

        menu.style.display = 'none';
    }

    const pageItemClickHandler = (e) => {
        if (e.target.innerText == "...") {
            return;
        }

        document.querySelector('.catalog__pagingItem-active').classList.remove('catalog__pagingItem-active')
        e.target.classList.add('catalog__pagingItem-active')
    }

    const textWrapperClickHandler = () => {
        const textWrapper = document.querySelector('.catalog__chooseDescription-textWrapper')
        textWrapper.style.height = textWrapper.style.height ==  '97%' ? '168px' : '97%';
        
        const img = createImg('../icons/arrow.svg');

        if (textWrapper.classList.contains('catalog__chooseDescription-textWrapper-active')) {
            textWrapper.classList.remove('catalog__chooseDescription-textWrapper-active');
            textWrapperBtn.innerText = 'Подробне';
        } else {
            textWrapper.classList.add('catalog__chooseDescription-textWrapper-active');
            textWrapperBtn.innerText = 'Скрыть';
            img.style.transform = 'rotate(180deg)';
        }

        textWrapperBtn.appendChild(img);
    }

    const mobileFilterToggle = () => {
        const filterBlock = document.querySelector('.catalog__filterWrapper');

        filterBlock.style.display = filterBlock.style.display == 'block' ? 'none' : 'block'
    }

    const doorTypeToggle = () => {
        const filterBlock = document.querySelector('.filter__filterOptionsBlock');
        filterBlock.style.display = filterBlock.style.display == 'block' ? 'none' : 'block'
        const filterMenu = document.querySelector('.filter__filterMenu');
        filterMenu.style.borderRadius = filterMenu.style.borderRadius == '5px 5px 0px 0px' ? '5px' : '5px 5px 0px 0px'
        filterMenu.style.borderBottom = filterMenu.style.borderBottom == 'none' ? '1px solid #F0F0F0' : 'none';

    }


    const doorTypeClickHandler = (e) => {
        mobileDoorTypeToggler.innerText = e.target.innerText;
        mobileDoorTypeToggler.appendChild(createImg('./img/select_arrow-black.svg'));

        document.querySelector('.filter__filterOption-active').classList.remove('filter__filterOption-active');
        e.target.classList.add('filter__filterOption-active');
    }



    popularFilter.addEventListener('click', filterOptionsToggle);
    mobileDoorTypeToggler.addEventListener('click', doorTypeToggle);
    mobileFilterToggler.addEventListener('click', mobileFilterToggle);
    textWrapperBtn.addEventListener('click', textWrapperClickHandler)
    pagingList.addEventListener('click', pageItemClickHandler)
    filterOptions.addEventListener('click', window.screen.width > 768 ? filterOptionClickHandler : doorTypeClickHandler);
    clearFiltersBtn.addEventListener('click', clearFilters)
    filters.forEach((filter) => filter.addEventListener('click', filterClickHandler));
    
    
    
    
    
    
    
    
    

    const createImg = (path) => {
        const img = document.createElement('img');
        img.src = path;
    
        return img
    }
}
