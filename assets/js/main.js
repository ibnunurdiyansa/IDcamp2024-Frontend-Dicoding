window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});

document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('.navMenu').classList.toggle('active');
});


