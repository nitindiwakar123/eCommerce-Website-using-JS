import { homeQuantityToggle } from "./quantityToggle";
import { addToCart } from "./addToCart";

const productContainerEl = document.querySelector('#productContainer');
const productTemplateEl = document.querySelector('#productTemplate');

export const showProductContainer = (products) => {
    if (!products) {
        return false;
    }

    products.forEach((curProd) => {
        const { brand, category, description, id, image, name, price, stock } = curProd;

        const productClone = document.importNode(productTemplateEl.content, true);

        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`);
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.productDescription').textContent = description;
        productClone.querySelector('.productPrice').textContent = `₹${price}`;
        productClone.querySelector('.productActualPrice').textContent = `₹${price * 2}`;
        productClone.querySelector('.productStock').textContent = stock;


        productClone.querySelector('.stockElement').addEventListener('click', (e) => {
            homeQuantityToggle(e, id, stock);
        });

        productClone.querySelector('.add-to-cart-button').addEventListener('click', (e) => {
            addToCart(e, id, stock);
        });

        productContainerEl.append(productClone);
    });
};