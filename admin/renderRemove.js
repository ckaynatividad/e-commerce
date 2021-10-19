export function renderProd(prod){
    const prodCard = document.createElement('div');
    prodCard.classList.add('prod-card');

    const prodHeader = document.createElement('h2');
    prodHeader.textContent = prod.name;

    const img = document.createElement('img');
    img.src = prod.img;    

    const prodPrice = document.createElement('h3');
    prodPrice.textContent = `$ ${prod.price}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.id = prod.id;
    removeBtn.classList.add('remove-btn');


    prodCard.append(prodHeader, prodPrice, img, removeBtn);
    return prodCard;
}