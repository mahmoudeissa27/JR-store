// Array to store cart items
const cartItems = [];

// Get references to DOM elements
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('total-price');
const confirmButton = document.getElementById('confirm-cart');
const clearCartButton = document.getElementById('clear-cart');

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const product = event.target.closest('.product');
        const id = product.dataset.id;
        const title = product.querySelector('h2').textContent;
        const price = parseFloat(product.dataset.price);

        // Add product to the cart array
        cartItems.push({ id, title, price });
        updateCart();
    });
});

// Function to update the cart UI
function updateCart() {
    // Update cart items list
    cartItemsElement.innerHTML = cartItems
        .map(
            (item, index) =>
                `<li>
                    ${item.title} - $${item.price.toFixed(2)} 
                    <button class="remove-from-cart" data-index="${index}">Remove</button>
                </li>`
        )
        .join('');

    // Update total price
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;

    // Add event listeners to "Remove" buttons
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', event => {
            const index = parseInt(event.target.dataset.index, 10);
            cartItems.splice(index, 1); // Remove item from cart array
            updateCart(); // Update UI
        });
    });
}

// Event listener for the "Confirm" button
confirmButton.addEventListener('click', () => {
    if (cartItems.length === 0) {
        alert("Your cart is empty. Please add items before confirming.");
        return;
    }

    // Save cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Navigate to the cart page
    window.location.href = "cart.html";
});

// Event listener for the "Clear Cart" button
clearCartButton.addEventListener('click', () => {
    cartItems.length = 0; // Clear cart array
    updateCart(); // Update UI
});


function filterByColor(color) {
    const products = document.querySelectorAll('.product'); // حدد جميع المنتجات
    products.forEach(product => {
        if (color === 'all' || product.dataset.color === color) {
            product.style.display = 'block'; // عرض المنتج إذا كان اللون متطابقاً
        } else {
            product.style.display = 'none'; // إخفاء المنتج إذا لم يكن اللون متطابقاً
        }
    });
}
