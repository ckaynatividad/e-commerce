import { products } from './data/products.js';
import { renderProd } from './render.js';
import { addItem } from './utils.js';

const productList = document.getElementById('product-list');

for (let prod of products){
    const prodCard = renderProd(prod);
    productList.append(prodCard);
}

const addButtons = document.querySelectorAll('.add-btn');
for (let addBtn of addButtons){
    addBtn.addEventListener('click', ()=>{
        addItem(addBtn.id);
        alert('Added item to your shopping cart.');
    });
}