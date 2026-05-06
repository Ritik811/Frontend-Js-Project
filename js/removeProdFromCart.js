import { getCartProductFromLSd } from "./getCardProduct.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";
import { updateCartValue } from "./updateCartValue.js";

export const removeProdFromCart = (id) => {
  let cartProduct = getCartProductFromLSd();

  cartProduct = cartProduct.filter((curProd) => curProd.id !== id);
  localStorage.setItem("cartProductLS", JSON.stringify(cartProduct));

  let removeDiv = document.querySelector(`#card${id}`);
  if (removeDiv) {
    removeDiv.remove();
  }

  updateCartValue(cartProduct.length);
  updateCartProductTotal();
};
