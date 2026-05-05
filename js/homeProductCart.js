import { addToCart } from "./addToCart.js";
import { homeQuantityToggle } from "./homeQuantityToggle.js";

const productTemplate = document.querySelector("#productTemplate");
const productContainer = document.querySelector("#productContainer");

export const showProductContainer = (products) => {
  if (!products) {
    console.log("Product is Empty");
    return;
  }

  products.forEach((curProd) => {
    const { id, name, category, brand, price, stock, description, image } =
      curProd;
    const productClone = document.importNode(productTemplate.content, true);
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent =
      `₹${price * 4}`;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (evt) => {
        homeQuantityToggle(evt, id, stock);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (evt) => {
        addToCart(evt, id, stock);
      });

    productContainer.append(productClone);
  });
};
