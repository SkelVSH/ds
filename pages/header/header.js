window.onload = () => {
    const menuTogglers = document.querySelectorAll('.toggleMenu')
    const body = document.querySelector('body');
    console.log(body);

    const toggleMenu = () => {
        const menu = document.querySelector('.header__menuContainer');
        const body = document.getElementsByTagName('body')[0];
        menu.style.transform = menu.style.transform == "translate(-50%, 100%)" ? "translate(-50%, 0)" : "translate(-50%, 100%)";
        if (body.classList.length > 0) {
            setTimeout(() => body.classList.remove('openModal'), 300)
        }
        else {
            body.classList.add('openModal') 
        }
    }

    body.addEventListener('click', (e) => body.classList.contains('openModal') && e.target == body && toggleMenu())
    menuTogglers.forEach((toggler) => toggler.addEventListener('click', toggleMenu))
}