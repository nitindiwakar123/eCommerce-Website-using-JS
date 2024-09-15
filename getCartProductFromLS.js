import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = () => {
    let cartProducts = localStorage.getItem("cartProducts");

    if (!cartProducts) {
        return [];
    }

    cartProducts = JSON.parse(cartProducts);

    //update cart value
    updateCartValue(cartProducts);

    return cartProducts;
};