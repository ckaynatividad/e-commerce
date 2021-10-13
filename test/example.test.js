// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderProd } from '../render.js';
import { products } from '../data/products.js';
import { findById } from '../utils.js';
import { renderLineItem } from '../render-line-items.js';

const test = QUnit.test;

test('renderProd return HTML snippet', (expect) => {

    const expected = `<div class="prod-card"><h2>Plum </h2><img src="./assets/plum.png"><h3>$ 1.11</h3></div>`;
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

test('dmo render should return itm qty, price, etc', (expect)=>{
    const expected = `<tr><td>Plum </td><td>1.11</td><td>6</td><td>6.66</td></tr>`;
    const plum = findById('plum', products);

    const actual = renderLineItem(plum.id, plum).innerHTML;

    expect.equal(actual, expected);

});