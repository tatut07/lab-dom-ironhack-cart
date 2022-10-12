// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceNum = Number(price.innerText);
  const quantityNum = Number(quantity.value);
  const subtotal = priceNum * quantityNum;
  const sub = product.querySelector('.subtotal span');
  sub.innerText = subtotal;
  console.log(product, priceNum, quantityNum, subtotal);
  const finalSubtotal = Number(sub.innerText);
  return finalSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalPrice = 0;
  const allProducts = document
    .querySelectorAll('.product')
    .forEach((product) => {
      let singlePrice = updateSubtotal(product);
      totalPrice += singlePrice;
      return totalPrice;
    });

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
