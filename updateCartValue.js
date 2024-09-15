const cartValue = document.querySelector('#cartValue');

export const updateCartValue = (arrLocalStorageProducts) => {
    return cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping">${arrLocalStorageProducts.length}</i>`;
}