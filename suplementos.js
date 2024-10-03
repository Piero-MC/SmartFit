document.addEventListener("DOMContentLoaded", function() {
    fetch('suplementos.json')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            data.products.forEach(product => {
                const productCard = `
                    <div class="col-md-4">
                        <div class="product-card">
                            <img src="${product.image}" alt="${product.title}">
                            <h5 class="mt-3">${product.title}</h5>
                            <p class="product-old-price">${product.old_price}</p>
                            <p class="product-price">${product.price}</p>
                            <button class="product-btn">${product.button_text}</button>
                        </div>
                    </div>
                `;
                productList.innerHTML += productCard;
            });
        })
        .catch(error => console.error('Error cargando los productos:', error));
});