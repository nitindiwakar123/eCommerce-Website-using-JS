import { getCartProductFromLS } from "./getCartProductFromLS";

export const updateCartProductTotal = () => {

    const productSubTotalEl = document.querySelector('.productSubTotal');
    const productFinalTotalEl = document.querySelector('.productFinalTotal');
    const tax = 50;

    let cartProducts = getCartProductFromLS();
    let initialValue = 0;

    const subTotal = cartProducts.reduce((accum, curProd) => {
        let productPrice = parseInt(curProd.price) || 0;
        return accum + productPrice;
    }, initialValue);

    productSubTotalEl.innerText = `₹${Number(subTotal.toFixed(2))}`;
    productFinalTotalEl.innerText = `₹${Number((subTotal + tax).toFixed(2))}`;
    
}