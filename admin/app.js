import { renderProd } from './renderRemove.js';
import { removeProduct, getProducts } from '../utils.js';

const productList = document.getElementById('product-list');
const products = getProducts();

for (let prod of products){
    const prodCard = renderProd(prod);
    productList.append(prodCard);
}

const removeBtns = document.querySelectorAll('.remove-btn');
for (let removeBtn of removeBtns){
    removeBtn.addEventListener('click', ()=>{
        removeProduct(removeBtn.id);
        alert('Product has been removed.');
        window.location.reload();
    });
}