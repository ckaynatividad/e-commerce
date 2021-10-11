// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderProd } from '../render.js';
import { products } from '../products.js';
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
