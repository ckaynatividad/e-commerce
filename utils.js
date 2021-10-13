

export function findById(id, items){

    for (let item of items) {
        if (item.id === id){
            return item;
        }
    }

}

export function orderTotalfx(cart, products) {
    let orderTotal = 0;
    for (let item of cart){
        const prod = findById(item.id, products);
        orderTotal = orderTotal + prod.price * item.qty;
    }
    return orderTotal;
}

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}