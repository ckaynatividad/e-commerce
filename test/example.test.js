// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderProd } from '../render.js';
import { products } from '../data/products.js';
import { findById, addItem, getCart } from '../utils.js';
// import { renderLineItem } from '../render-line-items.js';

const test = QUnit.test;

test('renderProd return HTML snippet', (expect) => {

    const expected = `<div class="prod-card"><h2>Plum </h2><img src="./assets/plum.png"><h3>$ 1.11</h3><button id="plum" class="add-btn">Add</button></div>`;
    const plum = products[0];

    const actual = renderProd(plum).outerHTML;


    expect.equal(actual, expected);
});

test('findById should return the item matching the ID', (expect)=>{
    const expected = {
        id: 'plum',
        name: 'Plum ',
        img: './assets/plum.png',
        price: 1.11
    };

    const actual = findById('plum', products);
    expect.deepEqual(actual, expected);
});



test('getCard should return cart', (expect)=>{


    const fakeCart = [
        { id: 'plum', qty: 2 },
        { id: 'oolong', qty: 4 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));

    const cart = getCart();


    expect.deepEqual(cart, fakeCart);
});

test('addItem should increment qty', (expect)=>{

    const fakeCart = [
        { id: 'plum', qty: 2 },
        { id: 'oolong', qty: 4 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));

    addItem('plum');
    const cart = getCart();
    const expected = [ 
        { id: 'plum', qty: 3 },
        { id: 'oolong', qty: 4 }
    ];

    expect.deepEqual(cart, expected);
});

test('getCart return empty array if null', (expect)=>{

    localStorage.removeItem('CART');
    const cart = getCart();

    expect.deepEqual(cart, []);
});

test('addItem should add item', (expect) =>{

    localStorage.removeItem('CART');

    const expected = [{ id: 'plum', qty: 1 }];

    addItem('plum');
    const cart = getCart();

    expect.deepEqual(cart, expected);
});

test('clearCart empties cart', (expect)=>{
    const fakeCart = [
        { id: 'plum', qty: 2 },
        { id: 'oolong', qty: 4 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    localStorage.removeItem('CART');
    const expected = [];
    const actual = getCart();
    expect.deepEqual(actual, expected);
});

test('addItem should increment qty', (expect)=>{

    const fakeCart = [
        { id: 'plum', qty: 2 },
        { id: 'oolong', qty: 4 }
    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));

    addItem('plum');
    const cart = getCart();
    const expected = [ 
        { id: 'plum', qty: 3 },
        { id: 'oolong', qty: 4 }
    ];

    expect.deepEqual(cart, expected);
});

test('getCart return empty array if null', (expect)=>{

    localStorage.removeItem('CART');
    const cart = getCart();

    expect.deepEqual(cart, []);
});

test('addItem should add item', (expect) =>{

    localStorage.removeItem('CART');

    const expected = [{ id: 'plum', qty: 1 }];

    addItem('plum');
    const cart = getCart();

    expect.deepEqual(cart, expected);
});
