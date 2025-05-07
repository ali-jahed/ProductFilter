const productsContainer = document.querySelector('.products-container');

import { productsData } from "./products.js";

const filters = {
    searchItem: '',
};

class Products {
    getProducts() {
        return productsData;
    }
}

class UI {
    displayProducts(products) {
        let result = '';
        products.forEach((item) => {
            result += `
            <div class="product">
                <div class="img-container">
                    <img src="${item.imageUrl}" alt="${item.title}">
                </div>
                <div class="product-description">
                    <p class="product-title">${item.title}</p>
                    <p>price: <span class="product-price">${item.price}</span> $</p>
                </div>
            </div>`;
        });
        productsContainer.innerHTML = result;
    }
}

function renderProducts(products, filters) {
    const filteredProducts = products.filter((p) => {
        return p.title.toLowerCase().includes(filters.searchItem.toLowerCase());
    });
    const ui = new UI();
    ui.displayProducts(filteredProducts);
}

document.addEventListener('DOMContentLoaded', () => {
    const productsInstance = new Products();
    const allProducts = productsInstance.getProducts();
    renderProducts(allProducts, filters);


    const searchInput = document.querySelector('#search-input'); 
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filters.searchItem = e.target.value;
            renderProducts(allProducts, filters);
        });
    }
});
