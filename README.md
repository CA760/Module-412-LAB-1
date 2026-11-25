## Reflection Questions

## 1. How did you dynamically create and append new elements to the DOM?

I used document.createElement() to create new HTML elements for each product. I used appendChild() to add the product name, price, quantity input, and Remove button to the shopping cart dynamically.

## 2. What steps did you take to ensure accurate updates to the total price?

I created an updateTotalPrice() function that loops through all cart items using querySelectorAll() and forEach(). It multiplies each product's price by its quantity and updates the total whenever a product is added, removed, or its quantity changes.

## 3. How did you handle invalid input for product name or price?

I used trim() to check for empty product names and Number.isFinite() to validate the price. I also checked that the price was greater than zero. If the input was invalid, an alert message appeared.

## 4. What challenges did you face when implementing the remove functionality?

One challenge was identifying which product to remove when the Remove button was clicked. I used event delegation with addEventListener() on the cart and closest() to locate the correct product. After removing it with remove(), I recalculated the total price to keep everything accurate.