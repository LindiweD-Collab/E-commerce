let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Update cart counter in header (optional UI element)
  function updateCartCounter() {
    const cartCounter = document.getElementById("cart-counter");
    if (cartCounter) {
      cartCounter.textContent = cart.length;
    }
  }

  // Add product to cart
  function addToCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCounter();
    alert(`${product.name} added to cart!`);
  }

  // Attach event listeners to all Add to Cart buttons
  document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");
      const price = parseFloat(button.getAttribute("data-price"));
      const product = { name, price };
      addToCart(product);
    });
  });

  // Initial counter setup
  updateCartCounter();
updateCartCounter();
