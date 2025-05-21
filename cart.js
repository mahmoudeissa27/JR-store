// Array to store the selected items (simulate cart data)
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Get references to DOM elements
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const paymentForm = document.getElementById('payment-form');

// Function to display cart items
function displayCartItems() {
    if (cartItems.length === 0) {
        cartItemsElement.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalElement.textContent = '$0.00';
        return;
    }

    cartItemsElement.innerHTML = cartItems
        .map(
            item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <h3>${item.title}</h3>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
            </div>
        `
        )
        .join('');

    // Calculate total price
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

// Handle payment form submission
paymentForm.addEventListener('submit', event => {
    event.preventDefault();

    const selectedMethod = document.querySelector(
        'input[name="payment-method"]:checked'
    ).value;

    alert(`Payment successful! Method: ${selectedMethod}`);
    localStorage.removeItem('cartItems'); // Clear cart
    window.location.href = 'home.html'; // Redirect to home page
});

// Display cart items on page load
displayCartItems();
