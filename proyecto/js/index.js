document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos de los botones de agregar al carrito
    var addToCartButtons = document.querySelectorAll(".add-cart");

    // Añadir evento de clic a cada botón
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Llamar a la función para agregar al carrito
            addToCart(button.closest(".card-product"));
        });
    });

    // Delegar eventos de clic al contenedor del carrito para manejar los botones de eliminar
    var cartContainer = document.getElementById("cartContainer");
    cartContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-button')) {
            // Llamar a la función para eliminar del carrito
            removeFromCart(event.target.closest('.cart-item'));
        }
    });

    // Función para agregar al carrito
    function addToCart(product) {
        // Obtener detalles del producto
        var productName = product.querySelector("h3").innerText;
        var productPrice = product.querySelector(".price").innerText;

        // Crear un nuevo elemento de producto en el carrito
        var cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span>${productName}</span>
            <span>${productPrice}</span>
            <button class="remove-button">Eliminar</button>
        `;

        // Agregar el nuevo elemento al contenedor del carrito
        var cartContainer = document.getElementById("cartContainer");
        cartContainer.appendChild(cartItem);

        // Actualizar la cantidad de productos en el carrito
        updateCartItemCount();
    }

    // Función para eliminar del carrito
    function removeFromCart(cartItem) {
        cartItem.remove();
        // Actualizar la cantidad de productos en el carrito
        updateCartItemCount();
    }

    // Función para actualizar la cantidad de productos en el carrito
    function updateCartItemCount() {
        var cartItemCount = document.querySelectorAll(".cart-item").length;
        var cartItemCountElement = document.getElementById("cartItemCount");
        cartItemCountElement.innerText = `(${cartItemCount})`;
    }
});

