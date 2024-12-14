// Datos de los productos
const products = [
    { id: 1, name: "BTC", price: 100.99, image: "img/1.png" },
    { id: 2, name: "ETH", price: 150.49, image: "img/2.webp" },
    { id: 3, name: "XRP", price: 70.99, image: "img/3.jpg" },
    { id: 4, name: "USDT", price: 1.00, image: "img/4.jpg" },
    { id: 5, name: "BNB", price: 15.49, image: "img/5.jpg" },
];

let cartTotal = 0;

// Cargar productos dinámicamente
const productsContainer = document.getElementById("products-container");
products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Precio: $${product.price.toFixed(2)}</p>
        <button class="add-to-cart-btn" data-id="${product.id}">Agregar al Carrito</button>
    `;
    productsContainer.appendChild(productCard);
});

// Agregar eventos a los botones de "Agregar al Carrito"
document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    button.addEventListener("click", (event) => {
        const productId = event.target.getAttribute("data-id");
        const product = products.find(p => p.id == productId);
        cartTotal += product.price;
        document.getElementById("total").textContent = cartTotal.toFixed(2);
    });
});

// Finalizar Compra
document.getElementById("buy-btn").addEventListener("click", () => {
    alert("Compra realizada con éxito");
    cartTotal = 0;
    document.getElementById("total").textContent = "0.00";
});