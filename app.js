import { products } from './products.js';
import { renderProd } from './render.js';

const productList = document.getElementById('product-list');

for (let prod of products){
  const prodCard = renderProd(prod);
  productList.append(prodCard);
}