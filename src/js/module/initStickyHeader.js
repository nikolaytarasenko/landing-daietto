const initStickyHeader = e => {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;

    header.classList.toggle('sticky', scrollY > 0);
}

module.exports = initStickyHeader;