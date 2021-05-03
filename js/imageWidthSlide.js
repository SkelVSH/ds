function widthSliderInit({leftBlockId, rightBlockId, rightImgId, width, buttonId, mobileWidth}) {
    const leftBlock = document.getElementById(leftBlockId);
    const rightBlock = document.getElementById(rightBlockId);
    const rightImg = document.getElementById(rightImgId);

    const contentWidth = window.screen.width > 768 ? 1170 : 360;
    const slideButton = document.getElementById(buttonId);

    let isMoving = false;

    const clickDown = (e) => {
        isMoving = true
    }

    const clickUp = () => isMoving = false;

    const moving = (e) => {
        let left;

        if (e.type == 'touchmove') {
            left =  e.targetTouches[0].clientX - (window.screen.width - contentWidth) / 2 ;
            if (isMoving && left > 0 && left < mobileWidth) {
                slideButton.style.left = `${left}px`;
                leftBlock.style.width = `${left}px`;
                rightBlock.style.width = `${mobileWidth - 1 - left}px`;
                rightImg.style.marginLeft = `${-left}px`
            }
        } else {
            left =  e.clientX - (window.screen.width - contentWidth) / 2 ;
            if (isMoving && left > 0 && left < width) {
                slideButton.style.left = `${left}px`;
                leftBlock.style.width = `${left}px`;
                rightBlock.style.width = `${width - 1 - left}px`;
                rightImg.style.marginLeft = `${-left}px`
            }
        }
    }

    slideButton.addEventListener('mousedown', clickDown);
    slideButton.addEventListener('touchstart', clickDown);
    slideButton.addEventListener('mouseup', clickUp);
    slideButton.addEventListener('touchend', clickUp);

    slideButton.addEventListener('mousemove', moving)
    slideButton.addEventListener('touchmove', moving)
}