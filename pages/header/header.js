window.onload = () => {
    const menuTogglers = document.querySelectorAll('.toggleMenu')

    const toggleMenu = () => {
        const menu = document.querySelector('.header__menuContainer');
        const body = document.getElementsByTagName('body')[0];

        if (body.classList.length > 0) 
            body.classList.remove('openModal')
        else
            body.classList.add('openModal') 
        menu.style.display = menu.style.display == 'block' ? 'none' : 'block'; 
    }


    menuTogglers.forEach((toggler) => toggler.addEventListener('click', toggleMenu))
}