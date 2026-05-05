import { getCartProductFromLSd } from "./getCardProduct.js";
import { updateCartValue } from "./updateCartValue.js";

getCartProductFromLSd();

export const addToCart = (evt, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLSd();
  const currProductEle = document.querySelector(`#card${id}`);
  console.log(currProductEle);
  let quantity = currProductEle.querySelector(".productQuantity").textContent;
  let price = currProductEle.querySelector(".productPrice").textContent;

  let existingProd = arrLocalStorageProduct.find((curEle) => curEle.id === id);

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = quantity * Number(existingProd.price);
    let updateCart = { id, quantity, price };
    updateCart = arrLocalStorageProduct.map((curEle) => {
      return curEle.id === id ? updateCart : curEle;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
  }

  if (existingProd) {
    return;
  }

  price = price.replace("₹", "");
  price = Number(price * quantity);
  quantity = Number(quantity);
  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
  updateCartValue(arrLocalStorageProduct.length);
};
