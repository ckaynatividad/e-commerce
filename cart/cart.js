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


const table = document.getElementById('table');
const msg = document.getElementById('msg');
const order = document.getElementById('order');
const clear = document.getElementById('clear');
if (cart.length <= 0){
    table.style.display = 'none';
    msg.classList.remove('hide');
    order.classList.add('hide');
    clear.classList.add('hide');

}

const orderTotal = orderTotalFx(cart, products);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = toUSD(orderTotal);

const orderBtn = document.getElementById('order');
orderBtn.addEventListener('click', ()=>{

    if (cart.length <= 0){
        orderBtn.disabled = true;
    }
    localStorage.removeItem('CART');
    window.location.replace('..');
});

const clearCart = document.getElementById('clear');
clearCart.addEventListener('click', ()=>{
    localStorage.removeItem('CART');
    window.location.reload();
});


