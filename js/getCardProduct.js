import { updateCartValue } from "./updateCartValue.js";

export const getCartProductFromLSd = () => {
  let cartProduct = localStorage.getItem("cartProductLS");

  if (!cartProduct) {
    return [];
  }

  cartProduct = JSON.parse(cartProduct);
  
  updateCartValue(cartProduct.length);

  return cartProduct;
};
