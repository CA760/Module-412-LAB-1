const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

// Function to update total price
function updateTotalPrice() {

    totalPrice = 0;

    const items = cart.querySelectorAll('.cart-item');

    items.forEach(item => {

        const price = parseFloat(item.dataset.price);
        const quantity = parseInt(item.querySelector('.quantity').value);

        totalPrice += price * quantity;

    });

    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to add products
addProductButton.addEventListener('click', () => {

    const productName = productNameInput.value.trim();
    const productPrice = parseFloat(productPriceInput.value);

    // Validate inputs
    if (productName === '' || !Number.isFinite(productPrice) || productPrice <= 0) {
        alert('Please enter a valid product name and price.');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');

    listItem.classList.add('cart-item');

    // Store product price
    listItem.dataset.price = productPrice;

    // Create product name
    const name = document.createElement('span');
    name.textContent = productName;

    // Create product price
    const price = document.createElement('span');
    price.textContent = '$' + productPrice.toFixed(2);

    // Create quantity input
    const quantity = document.createElement('input');

    quantity.type = 'number';
    quantity.classList.add('quantity');
    quantity.value = 1;
    quantity.min = 1;

    // Create remove button
    const removeButton = document.createElement('button');

    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // Append elements to list item
    listItem.appendChild(name);
    listItem.appendChild(price);
    listItem.appendChild(quantity);
    listItem.appendChild(removeButton);

    // Add item to cart
    cart.appendChild(listItem);

    // Update total
    updateTotalPrice();

    // Clear inputs
    productNameInput.value = '';
    productPriceInput.value = '';

});

// Event delegation for removing products
cart.addEventListener('click', (event) => {

    if (event.target.classList.contains('remove-btn')) {

        const item = event.target.closest('.cart-item');

        item.remove();

        updateTotalPrice();

    }

});

// Event delegation for updating quantities
cart.addEventListener('change', (event) => {

    if (event.target.classList.contains('quantity')) {

        const quantity = parseInt(event.target.value);

        if (!Number.isInteger(quantity) || quantity < 1) {
            event.target.value = 1;
        }

        updateTotalPrice();

    }

});