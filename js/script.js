document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.hamburger-menu');
    const productQuantities = document.querySelectorAll('.product .quantity-box');
    const originalPriceDisplay = document.querySelector('.order-summary-top .summary-item strong');
    const totalPriceDisplay = document.querySelector('.order-summary-top .total');

    const cupcakeUnitPrice = 3.75;

    // Toggle hamburger menu
    if (menuIcon && menu) {
        menuIcon.addEventListener('click', () => {
            console.log("Clicked");
            menu.classList.toggle("show-menu");
        });
    }

    // Update order summary
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

    // Attach listeners to quantity inputs
    productQuantities.forEach(input => {
        input.addEventListener('change', updateOrderSummary);
        input.addEventListener('keyup', updateOrderSummary);
    });

    updateOrderSummary();
});
