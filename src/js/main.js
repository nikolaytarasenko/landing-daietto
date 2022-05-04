const toggleMobileNavigation = require('./module/toggleMobileNavigation.js');
const hideMobileNavigationOnDesktop = require('./module/hideMobileNavigationOnDesktop.js');

const init = () => {
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', toggleMobileNavigation);
    window.addEventListener('resize', hideMobileNavigationOnDesktop);
}

window.addEventListener('load', init);