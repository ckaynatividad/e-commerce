export function renderProd(prod){
    const prodCard = document.createElement('div');
    prodCard.classList.add('prod-card');

    const img = document.createElement('img');
    img.src = prod.img;    
    
    const prodHeader = document.createElement('h2');
    prodHeader.textContent = prod.name;

    const prodPrice = document.createElement('h3');
    prodPrice.textContent = `$ ${prod.price}`;

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add';
    addBtn.id = prod.id;
    addBtn.classList.add('add-btn');

    prodCard.append(prodHeader, img, prodPrice, addBtn);
    return prodCard;
}