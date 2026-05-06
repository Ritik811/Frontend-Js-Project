import { getCartProductFromLSd } from "./getCardProduct.js";

export const updateCartProductTotal = () => {
  const productSubTotal = document.querySelector(".productSubTotal");
  const productFinalTotal = document.querySelector(".productFinalTotal");
  let localCartProducts = getCartProductFromLSd();
  let initialVal = 0;
  let totalProductPrice = localCartProducts.reduce((accum, curEle) => {
    let productPrice = parseInt(curEle.price) || 0;
    return accum + productPrice;
  }, initialVal);

  productSubTotal.textContent = `₹${totalProductPrice}`;
  productFinalTotal.innerText = `₹${totalProductPrice + 50}`;
};
