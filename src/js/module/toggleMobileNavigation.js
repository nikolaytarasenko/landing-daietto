const toggleMobileNavigation = e => {
    const navigation = document.querySelector('.header__navigation');

    navigation.classList.toggle('opened');
}

module.exports = toggleMobileNavigation;