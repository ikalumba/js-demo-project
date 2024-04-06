const productsContainer = document.querySelector(".doll-list");
const cartContainer = document.querySelector(".cart");
let dolls;
fetch("/data/dolls.json")
  .then((res) => res.json())
  .then((data) => {
    dolls = data;

    // Render products
    dolls.forEach((doll) => {
      const productElement = document.createElement("div");
      productElement.classList.add("doll-card");
      productElement.innerHTML = `
  <img
    alt="${doll.name}"
    src="${doll.image}"
    class="doll-card-image"
  />
  <p class="doll-description">
    ${doll.name}
  </p>
  <p class="doll-price">Ugx ${doll.price.toLocaleString()}</p>
  <button onClick="addToCart(${doll.id})">Add to cart</button>`;

      productsContainer.appendChild(productElement);
    });
  });
let cart = [];

// Function to add item to cart
function addToCart(productId) {
  const product = dolls.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    renderCart();
  }
}

// Function to render cart
function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.textContent = item.name;
    const btnRemove = document.createElement("button");
    btnRemove.classList.add("remove-btn");
    btnRemove.textContent = "Remove item";
    cartItem.appendChild(btnRemove);
    cartContainer.appendChild(cartItem);
    btnRemove.addEventListener("click", function () {
      removeFromCart(item.id);
    });
  });
  const totalElement = document.createElement("div");
  totalElement.classList.add("cart-total");

  totalElement.textContent = `Total UGX: ${total.toLocaleString()}`;
  cartContainer.appendChild(totalElement);
}

// document.querySelector(".add-cart-btn").addEventListener("click", function () {
//   addToCart();
// });
// console.log(cart);
// function removeFromCart(dollId) {
//   const newArray = cart.filter((doll) => doll.id !== dollId);
// }

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}
