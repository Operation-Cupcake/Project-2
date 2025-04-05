        const cupcakeQuantityInput = document.getElementById('cupcake-quantity');
        const cupcakePriceDisplay = document.getElementById('cupcake-price');
        const originalPriceDisplay = document.getElementById('original-price');
        const totalPriceDisplay = document.getElementById('total-price');

        const cupcakeUnitPrice = 3.75;

        function updatePrice() {
            const quantity = parseInt(cupcakeQuantityInput.value, 10);
            if (isNaN(quantity) || quantity < 0) {
                return; 
            }

            const totalPrice = quantity * cupcakeUnitPrice;

            cupcakePriceDisplay.textContent = totalPrice.toFixed(2);
            originalPriceDisplay.textContent = totalPrice.toFixed(2);
            totalPriceDisplay.textContent = totalPrice.toFixed(2);
        }

        cupcakeQuantityInput.addEventListener('change', updatePrice);
        cupcakeQuantityInput.addEventListener('keyup', updatePrice); 

        
        updatePrice();