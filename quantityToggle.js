export const homeQuantityToggle = (e, id, stock) => {
    const currentCardEl = document.querySelector(`#card${id}`);
    const productQuantity = currentCardEl.querySelector('.productQuantity');
    
    let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1;

    if(e.target.className == 'cartIncrement'){
        if(quantity < stock){
            quantity += 1;
        }
        else if(quantity === stock){
            quantity = stock;
        }
    }

    if(e.target.className == 'cartDecrement'){
        if(quantity > 1){
            quantity -= 1;
        }
        
    }

    productQuantity.innerText = quantity;
    productQuantity.setAttribute('data-quantity', quantity);
    return quantity;
};