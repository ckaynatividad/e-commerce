import { findById, toUSD } from './utils.js';

export function renderLineItem(cartItem, prodData) {
    console.log(prodData);
    const product = findById(cartItem.id, prodData);
    const tr = document.createElement('tr');
    
    const tdName = document.createElement('td');
    tdName.textContent = product.name;
    
    const tdPrice = document.createElement('td');
    tdPrice.textContent = product.price;
    
    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    
    const tdTotal = document.createElement('td');
    tdTotal.textContent = toUSD(cartItem.qty * product.price);
    

    tr.append(tdName, tdPrice, tdQty, tdTotal);

    return tr;
}