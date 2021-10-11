export function renderProd(prod){
    const prodCard = document.createElement('div');
    prodCard.classList.add('prod-card');

    const img = document.createElement('img');
    img.src = prod.img;    
    
    const prodHeader = document.createElement('h2');
    prodHeader.textContent = prod.name;

    prodCard.append(prodHeader, img);
    return prodCard;
}