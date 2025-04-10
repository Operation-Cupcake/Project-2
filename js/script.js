document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.hamburger-menu');

    menuIcon.addEventListener('click', () => {
        console.log("Clicked")
        menu.classList.toggle("show-menu")
    });
});

/* Javascript for menu button */