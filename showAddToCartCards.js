import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { removeElementFromCart } from "./removeElementFromCart";
import { incrementDecrement } from "./incrementDecrement";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((currProd) => {
    return cartProducts.some((curElem) => curElem.id === currProd.id);

});

const productCartContainerEl = document.querySelector('#productCartContainer');
const productCartTemplateEl = document.querySelector('#productCartTemplate');

const showCartProducts = () => {
    filterProducts.forEach((currentProduct) => {
        const { category, id, name, image, stock, price } = currentProduct;

        let productClone = document.importNode(productCartTemplateEl.content, true);

        const lSActualData = fetchQuantityFromCartLS(id, price);

        productClone.querySelector('#cardValue').setAttribute("id", `card${id}`);
        productClone.querySelector('.category').innerText = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.productQuantity').innerText = lSActualData.quantity;
        productClone.querySelector('.productPrice').innerText = lSActualData.price;

        productClone.querySelector('.stockElement').addEventListener('click', (e) => {
            incrementDecrement(e, id, stock, price);
        });

        productClone.querySelector('.remove-to-cart-button').addEventListener('click', (e) => {
            removeElementFromCart(id);
        });

        productCartContainerEl.append(productClone);
    });
}

showCartProducts();

updateCartProductTotal();