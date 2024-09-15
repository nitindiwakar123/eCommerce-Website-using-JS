import { getCartProductFromLS } from "./getCartProductFromLS"
import { updateCartValue } from "./updateCartValue";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { showToast } from "./showToast";

export const removeElementFromCart = (id) => {
    let cartProducts = getCartProductFromLS();

    cartProducts = cartProducts.filter((curProd) => curProd.id != id);

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    let cardElement = document.querySelector(`#card${id}`);

    if (cardElement) {
        cardElement.remove();
        showToast("delete", id);
    }

    updateCartValue(cartProducts);
    updateCartProductTotal();
}