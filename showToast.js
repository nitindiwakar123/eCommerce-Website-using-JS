export const showToast = (operation, id) => {

    const toastEl = document.createElement('div');
    toastEl.classList.add("toast");

    if(operation === "add"){
        toastEl.innerText = `Product with ID ${id} has been added.`;
    }
    else{
        toastEl.innerText = `Product with ID ${id} has been deleted.`;
    }

    document.body.appendChild(toastEl);

    setTimeout(() => {
        toastEl.remove();
    }, 2000);
};