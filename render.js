export function renderProd(prodObject){
    const prodCard = document.createElement('div');
    prodCard.classList.add('prod-card');

    const prodHeader = document.createElement('h2');
    prodHeader.textContent = prodObject.name;

    const img = document.createElement('img');
    img.src = prodObject.img;

    prodCard.append(prodHeader, img);
    return prodCard;
}