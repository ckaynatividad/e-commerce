// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderProd } from '../render.js';
import { products } from '../data/products.js';
import { findById } from '../utils.js';
import { cart } from '../data/cart-data.js';

const test = QUnit.test;

test('renderProd return HTML snippet', (expect) => {

    const expected = `<div class="prod-card"><h2>Plum </h2><img src="./assets/plum.png"><h3>$ 1.11</h3></div>`;
    const plum = products[0];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProd(plum).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
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

test('dm render should return itm qty, price, etc', (expect)=>{
    const expected = `<td>Plum </td><td>1.11</td><td>6</td><td>6.66</td>`;
    const plumCart = cart[0];

    const actual = (plumCart, cart).outerHTML;

    expect.equal(actual, expected);

});