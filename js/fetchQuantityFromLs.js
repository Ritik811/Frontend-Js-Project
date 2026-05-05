import { getCartProductFromLSd } from "./getCardProduct.js";

export const fetchQuantityFromLS = (id, price) => {
  const cartProduct = getCartProductFromLSd();
  const existingProduct = cartProduct.find((curEle) => curEle.id === id);
  let quantity = 1;
  if (existingProduct) {
    price = existingProduct.price;
    quantity = existingProduct.quantity;
  }

  return { price, quantity };
};
