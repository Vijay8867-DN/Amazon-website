import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummay.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';


  renderOrderSummary();
  renderPaymentSummary();
  
 let cartQuantity = 0;

cart.forEach((cartItem) => {
  cartQuantity += cartItem.quantity;
});

document.querySelector('.js-return-to-home-link')
  .innerHTML = `${cartQuantity} items`;