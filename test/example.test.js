// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderProd } from '../render';
const test = QUnit.test;

test('renderProd return HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="prod-card">
    <h2>Hello Kitty</h2>
    <img src="" alt="hello-kitty">
    </div>`;
    const helloKitty = products[0];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProd(helloKitty).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
