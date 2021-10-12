import { products } from '../data/products.js';
import { cart } from '../data/cart-data.js';
import { findById } from '../utils.js';

const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const prodData = findById(cartItem.id, products);

    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = prodData.name;
    const tdPrice = document.createElement('td');
    tdPrice.textContent = prodData.price;
    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    const tdTotal = document.createElement('td');
    tdTotal.textContent = (cartItem.qty * prodData.price).toFixed(2);

    tr.append(tdName, tdPrice, tdQty, tdTotal);
    tbody.appendChild(tr);
}