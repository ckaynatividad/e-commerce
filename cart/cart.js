import { products } from '../data/products.js';
import { orderTotalFx, findById, getCart, toUSD } from '../utils.js';
import { renderLineItem } from '../render-line-items.js';

const cart = getCart();

const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const prodData = findById(cartItem.id, products);

    const tr = renderLineItem(cartItem, prodData);
    tbody.appendChild(tr);
}

const orderTotal = orderTotalFx(cart, products);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = toUSD(orderTotal);

const orderBtn = document.getElementById('order');
orderBtn.addEventListener('click', ()=>{
    localStorage.removeItem('CART');
    window.location.replace('..');
});