const hideMobileNavigationOnDesktop = e => {
    const windowInnerWidth = window.innerWidth;
    const navigation = document.querySelector('.header__navigation');

    if (windowInnerWidth > 992) navigation.classList.remove('opened');
}

module.exports = hideMobileNavigationOnDesktop;