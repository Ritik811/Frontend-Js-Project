import { getCartProductFromLSd } from "./getCardProduct.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

export const incrementDecrement = (evt, id, stock, price) => {
  const currCardElement = document.querySelector(`#card${id}`);
  let productQuantity = currCardElement.querySelector(`.productQuantity`);
  let productPrice = currCardElement.querySelector(".productPrice");

  let quantity = 1;
  let localCartProducts = getCartProductFromLSd();
  let localStoragePrice = 0;

  let existingProduct = localCartProducts.find((curEle) => curEle.id === id);

  if (existingProduct) {
    quantity = existingProduct.quantity;
    localStoragePrice = existingProduct.price;
  }

  if (evt.target.className === "cartIncrement") {
    if (quantity < stock) quantity += 1;
  }

  if (evt.target.className === "cartDecrement") {
    if (quantity > 1) quantity -= 1;
  }

  localStoragePrice = (quantity * price).toFixed(2);


  let updateCart = { id, quantity, price: localStoragePrice };

  updateCart = localCartProducts.map((curProd) => {
    return curProd.id === id ? updateCart : curProd;
  });

  localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
  productQuantity.innerText = quantity;
  productPrice.innerText = localStoragePrice;

  updateCartProductTotal();

};
