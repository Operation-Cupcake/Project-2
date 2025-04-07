document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.hamburger-menu');
  
    menuIcon.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  });
  