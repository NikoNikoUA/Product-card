const products = [
  {
    name: "Engine",
    description: "Any text Any text Any text Any text Any text Any text",
    price: 2000,
    available: true,
    onSale: true,
  },

  {
    name: "Accumulator",
    description: "Any text Any text Any text Any text Any text Any text",
    price: 3000,
    available: false,
    onSale: false,
  },

  {
    name: "Pipe",
    description: "Any text Any text Any text Any text Any text Any text",
    price: 1000,
    available: true,
    onSale: true,
  },
];

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement("article");
  productEl.classList.add("product");

  const nameEl = document.createElement("h2");
  nameEl.classList.add("product-name");
  nameEl.textContent = name;

  const descrEl = document.createElement("p");
  descrEl.textContent = description;
  descrEl.classList.add("product-description");

  const priceEl = document.createElement("p");
  priceEl.textContent = `Price: ${price}`;
  priceEl.classList.add("product-price");

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

console.log(makeProductCard(products[2]));

const elements = products.map(makeProductCard);

console.log(elements);

const allProducts = document.querySelector(".js-products");
allProducts.append(...elements);

console.log(allProducts);
