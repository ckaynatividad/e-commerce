

export function renderLineItem(cartItem, prodData) {
    //const product = findById(cartItem.id, prodData);

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

    return tr;
}