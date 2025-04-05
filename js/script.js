document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.querySelector('.product-info .quantity-box');
    const originalPriceDisplay = document.querySelector('.order-summary .summary-item strong');
    const totalPriceDisplay = document.querySelector('.order-summary .total strong');

    const cupcakeUnitPrice = 3.75;

    function updatePrice() {
       
        const quantity = parseInt(quantityInput.value, 10);
        if (isNaN(quantity) || quantity < 0) {
            originalPriceDisplay.textContent = cupcakeUnitPrice.toFixed(2);
            totalPriceDisplay.textContent = cupcakeUnitPrice.toFixed(2);
            return;
        }

        const totalPrice = quantity * cupcakeUnitPrice;

        originalPriceDisplay.textContent = totalPrice.toFixed(2);
        totalPriceDisplay.textContent = totalPrice.toFixed(2);
    }

    if (quantityInput) {
        quantityInput.addEventListener('change', updatePrice);
        quantityInput.addEventListener('keyup', updatePrice);

        updatePrice();
    } else {
        console.error("Quantity input element not found.");
    }
});