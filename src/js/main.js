const toggleMobileNavigation = require('./module/toggleMobileNavigation.js');
const hideMobileNavigationOnDesktop = require('./module/hideMobileNavigationOnDesktop.js');
const initStickyHeader = require('./module/initStickyHeader.js');

const init = () => {
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', toggleMobileNavigation);
    window.addEventListener('resize', hideMobileNavigationOnDesktop);
    window.addEventListener('scroll', initStickyHeader);
}

window.addEventListener('load', init);