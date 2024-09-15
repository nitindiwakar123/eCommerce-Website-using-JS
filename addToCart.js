import { updateCartValue } from "./updateCartValue";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";

getCartProductFromLS();

export const addToCart = (e, id, stock) => {
    const currentProductEl = document.querySelector(`#card${id}`);

    let arrLocalStorageProducts = getCartProductFromLS();

    let quantity = currentProductEl.querySelector('.productQuantity').innerText;
    let price = currentProductEl.querySelector('.productPrice').innerText;

    quantity = Number(quantity);
    price = price.replace("₹", "");


    let existingProd = arrLocalStorageProducts.find((curProd) => curProd.id === id);

    if (existingProd && quantity) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updateCart = { id, quantity, price };

        updateCart = arrLocalStorageProducts.map((curProd) => {
            return curProd.id === id ? updateCart : curProd;
        });
        localStorage.setItem("cartProducts", JSON.stringify(updateCart));
        showToast("add", id);

        return;

    }

    // if(existingProd){
    //     return false;
    // }

    price = Number(price * quantity);

    let updateCart = { id, quantity, price };

    arrLocalStorageProducts.push(updateCart);
    localStorage.setItem("cartProducts", JSON.stringify(arrLocalStorageProducts));

    //update cart value
    updateCartValue(arrLocalStorageProducts);
    showToast("add", id);
}