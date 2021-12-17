window.onload = () => {
    const menuTogglers = document.querySelectorAll('.toggleMenu')
    const body = document.querySelector('body');
    const showCertButton = document.querySelector('.header__menuColumn-certificates')
    const certWrap = document.querySelector('.certificate__wrap')
    const certClose = certWrap.querySelector('.certificate__close')

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

    showCertButton.addEventListener('click', () => {
        toggleMenu()
        certWrap.classList.add('active')
        setTimeout(() => certWrap.classList.add('slide'), 0)
        setTimeout(() => body.classList.add('openModal'), 300)
    })

    const closeCert = () => {
        certWrap.classList.remove('slide')
        setTimeout(() => {
            certWrap.classList.remove('active')
            body.classList.remove('openModal')
        }, 300)
    }

    certClose.addEventListener('click', () => closeCert())
    certWrap.addEventListener('click', (e) => {
        if(e.target.classList.contains('certificate__wrap')) {
            closeCert()
        }
    })


    menuTogglers.forEach((toggler) => toggler.addEventListener('click', toggleMenu))
}