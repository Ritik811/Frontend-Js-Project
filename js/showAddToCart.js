import { getCartProductFromLSd } from "./getCardProduct.js";
import products from "../api/product.json" with { type: "json" };
import { fetchQuantityFromLS } from "./fetchQuantityFromLs.js";
import { removeProdFromCart } from "./removeProdFromCart.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

const cartProduct = getCartProductFromLSd();

const updateCart = products.filter((curProd) => {
  return cartProduct.some((curEle) => curEle.id === curProd.id);
});

const productTemplate = document.querySelector("#productCartTemplate");
const productContainer = document.querySelector("#productCartContainer");

const showCartProduct = () => {
  updateCart.forEach((curProd) => {
    const { id, name, category, brand, price, stock, description, image } =
      curProd;

    const LSData = fetchQuantityFromLS(id, price);

    const productClone = document.importNode(productTemplate.content, true);
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productPrice").innerText = LSData.price;
    productClone.querySelector(".productName").textContent = name;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (evt) => {
        incrementDecrement(evt, id, stock, price);
      });

    productClone.querySelector(".productQuantity").textContent =
      LSData.quantity;
    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => {
        removeProdFromCart(id);
      });

    productContainer.append(productClone);
  });
};

showCartProduct();

updateCartProductTotal();
