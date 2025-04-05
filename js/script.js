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

    // 🧁 Hamburger menu logic
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.hamburger-menu');

    if (menuIcon && menu) {
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
                menu.classList.remove('show');
            }
        });
    }
});
