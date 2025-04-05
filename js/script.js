document.addEventListener('DOMContentLoaded', function() {
    const productQuantities = document.querySelectorAll('.product .quantity-box');
    const originalPriceDisplay = document.querySelector('.order-summary-top .summary-item strong');
    const totalPriceDisplay = document.querySelector('.order-summary-top .total');

    const cupcakeUnitPrice = 3.75;

    function updateOrderSummary() {
        let totalQuantity = 0;
        productQuantities.forEach(input => {
            const quantity = parseInt(input.value, 10);
            if (!isNaN(quantity) && quantity >= 0) {
                totalQuantity += quantity;
            }
        });

        const totalPrice = (totalQuantity * cupcakeUnitPrice).toFixed(2);

        if (originalPriceDisplay) {
            originalPriceDisplay.textContent = `$${totalPrice}`;
        }

        if (totalPriceDisplay) {
            totalPriceDisplay.innerHTML = `<strong>Total</strong><span style="float:right">$${totalPrice}</span>`;
        }
    }

    productQuantities.forEach(input => {
        input.addEventListener('change', updateOrderSummary);
        input.addEventListener('keyup', updateOrderSummary);
    });

    updateOrderSummary();

    // Hamburger Menu Logic (Modified to hide links initially)
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.hamburger-menu');
    const menuLinks = document.querySelector('.menu-links'); 
    if (menuIcon && menu && menuLinks) {
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('show');
            menuLinks.classList.toggle('show-links');
        });

        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
                menu.classList.remove('show');
                menuLinks.classList.remove('show-links');
            }
        });
    }

    const footerMenuToggle = document.querySelector('.footer-menu-toggle');
    const footerNav = document.querySelector('.footer-nav');

    if (footerMenuToggle && footerNav) {
        footerMenuToggle.addEventListener('click', function() {
            footerNav.classList.toggle('show-menu');
            if (footerNav.classList.contains('show-menu')) {
                footerMenuToggle.textContent = 'Hide Footer Menu';
            } else {
                footerMenuToggle.textContent = 'Show Footer Menu';
            }
        });
    }
});