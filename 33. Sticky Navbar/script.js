const nav = document.querySelector(".nav");

window.addEventListener('scroll', function sticky() {
    console.log(window.pageYOffset, nav.offsetTop);
    if (window.pageYOffset > nav.offsetTop + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
});