// export default - файл звідки проиходить масив обєктів
// import products from "./data/products.js"; - вказує на шлях звідки імпортуємо

// 1. There is an element

const product = {
  name: "Engine",
  description: "Any text Any text Any text Any text Any text Any text",
  price: 2000,
  available: true,
  onSale: true,
};

// 2. There is HTML markup from a front - end developer

//     <article class="product" >
//     <h2 class="product-name">NAME</h2>
//     <p class="product-description">DESCRIPTION</p>
//     <p class="product-price">PRICE</p>
// </article >

//     The task is to create a card using the markup template

const productEl = document.createElement("article");
productEl.classList.add("product");

const nameEl = document.createElement("h2");
nameEl.classList.add("product-name");
nameEl.textContent = product.name;

const descrEl = document.createElement("p");
descrEl.textContent = product.description;
descrEl.classList.add("product-description");

const priceEl = document.createElement("p");
priceEl.textContent = `Price: ${product.price}`;
priceEl.classList.add("product-price");

productEl.append(nameEl, descrEl, priceEl);

console.log(productEl);

const body = document.querySelector("body");
body.append(productEl);
