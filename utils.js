

export function findById(id, items){

    for (let item of items) {
        if (item.id === id){
            return item;
        }
    }

}

export function orderTotalFx(cart, products) {
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

export function getCart(){

    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;

}

export function addItem(id){
    const cart = getCart();
    const cartItem = findById(id, cart);
    if (cartItem){
        cartItem.qty++;
    } else {
        const newItem = { id: id, qty: 1 };
        cart.push(newItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
}

import { products } from './data/products.js';

export function getProducts(){

    let lsProducts = localStorage.getItem('PRODUCTS');
    const prods = JSON.parse(lsProducts);

    if (!prods){
        const prodString = JSON.stringify(products);
        localStorage.setItem('PRODUCTS', prodString);
    }
    return prods || products;
}

export function addProduct(newProd){
    let products = getProducts();

    products.push(newProd);

    let prodString = JSON.stringify(products);
    localStorage.setItem('PRODUCTS', prodString);
}

export function removeProduct(newProd){
    let products = getProducts();
    let product = findById(newProd, products);
    const productIndex = products.indexOf(product);

    products.splice(productIndex, 1);

    let prodString = JSON.stringify(products);
    localStorage.setItem('PRODUCTS', prodString);
}