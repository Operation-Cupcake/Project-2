document.addEventListener('DOMContentLoaded', function() {
    const productQuantities = document.querySelectorAll('.product .quantity-box');
    const originalPriceDisplay = document.querySelector('.order-summary .summary-item strong');
    const totalPriceDisplay = document.querySelector('.order-summary .total strong');

    const cupcakeUnitPrice = 3.75;

    function updateOrderSummary() {
        let totalQuantity = 0;
        productQuantities.forEach(input => {
            const quantity = parseInt(input.value, 10);
            if (!isNaN(quantity) && quantity >= 0) {
                totalQuantity += quantity;
            }
        });

        const totalPrice = totalQuantity * cupcakeUnitPrice;
        originalPriceDisplay.textContent = totalPrice.toFixed(2);
        totalPriceDisplay.textContent = totalPrice.toFixed(2);
    }

    productQuantities.forEach(input => {
        input.addEventListener('change', updateOrderSummary);
        input.addEventListener('keyup', updateOrderSummary);
    });

    updateOrderSummary();
});