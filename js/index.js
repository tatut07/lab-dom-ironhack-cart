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
  let totalPriceSum = 0;

  document.querySelectorAll('.product').forEach((product) => {
    const singlePrice = updateSubtotal(product);
    totalPriceSum += singlePrice;
  });
  const finalPrice = document.querySelector('#total-value span');
  finalPrice.innerText = totalPriceSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document
    .querySelectorAll('.btn-remove')
    .forEach((button) => {
      button.addEventListener('click', removeProduct);
    });
});
