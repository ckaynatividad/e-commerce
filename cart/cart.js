import { products } from '../data/products.js';
import { cart } from '../data/cart-data.js';
import { orderTotalfx, findById, toUSD } from '../utils.js';
import { renderLineItem } from '../render-line-items.js';

const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const prodData = findById(cartItem.id, products);

    const tr = renderLineItem(cartItem, prodData);
    tbody.appendChild(tr);
}

const orderTotal = orderTotalfx(cart, products);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = toUSD(orderTotal);